<script>
  import { browser } from "$app/env";
  import { fade } from "svelte/transition";

  import FileItem from "$lib/components/docs/FileItem.svelte"
  import docImage from "$static/images/docx.svg?url"
  import pdfImage from "$static/images/pdf.svg?url"

  export let name
  export let title
  export let accept
  export let multiple = false
  export let required = false
  export let previewAnimation = "uk-animation-scale-up"

  let fileInputElement
  let dragover = false
  let showAlert = false
  let errorCount = 0
  let alertMsg = ""
  let files = []
  let previewFiles = []

  const ACCEPTED_MIME_TYPE = [
    "image/png",
    "image/jpeg",
    "application/pdf"
  ]

  const DOCS_MIME_TYPES = [
    "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
    "application/msword",
  ]

  const validateFileType = ({ type }) => {
    if (!ACCEPTED_MIME_TYPE.includes(type)) {
      if (multiple) {
        alertMsg = `Sorry, one or more of the files you selected with file type: ${type} is not allowed`
      } else {
        alertMsg = `Sorry, file selected of type: ${type} is not allowed`
      }
      fileInputElement.value = ""
      previewFiles = []
      showAlert = true
      return false
    }
    return true
  }

  const validateFileSize = ({ size }) => {
    if (size > 2000000) {
      if (multiple) {
        alertMsg = "Sorry, one or more of the files you selected exceeds the size limit of 2MB"
      } else {
        alertMsg = `Sorry, file selected exceedes size limit of 2MB`
      }
      fileInputElement.value = ""
      previewFiles = []
      showAlert = true
      return false
    }
    return true
  }

  const generalValidation = (/** @type {object}*/ files) => {
    if (multiple) {
      files.forEach((/** @type {Blob}*/ file) => {
        if (!validateFileType(file)) {
          errorCount++ 
          return false
        }
        if (!validateFileSize(file)) {
          errorCount++ 
          return false
        }
        errorCount = 0
      })
    } else {
      const singleFile = files[0]
      if (!validateFileType(singleFile)) {
        errorCount++
        return false
      }
      if (!validateFileSize(singleFile)) {
        errorCount++
        return false
      }
      errorCount = 0
    }
    if (errorCount !== 0) return false
    return true
  }

  const handleDragover = () => dragover = true

  const handleDragleave = () => dragover = false

  const handleFileDrop = (/** @type {object} */ e) => {
    dragover = false
    if (!e.dataTransfer.files) return
    files = [...e.dataTransfer.files]
    if (!generalValidation(files)) return 
    fileInputElement.files = e.dataTransfer.files
    renderFilePreviews({ files })
  }

  const handleFileChange = (/** @type {object} */ e) => {
    if (!e.target.files) {
      fileInputElement.value = ""
      showAlert = false
      alertMsg = ""
      return
    }
    files = [...e.target.files]
    if (!generalValidation(files)) return
    renderFilePreviews({ files })
  }

  const ifResultIsDoc = (/** @type {string} */ type) => {
    if (DOCS_MIME_TYPES.includes(type)) return docImage
    if (type === "application/pdf") return pdfImage
  }

  const renderFilePreviews = ({ files }) => {
    previewFiles = []
    files.forEach((/** @type {Blob} */ file) => {
      showAlert = false
      alertMsg = ""

      const reader = new FileReader()
      reader.readAsDataURL(file)
      reader.onload = () => {
        let resultImage
        if (!ifResultIsDoc(file.type)) {
          resultImage = reader.result
        } else {
          resultImage = ifResultIsDoc(file.type)
        }
        previewFiles = [...previewFiles, { name: file['name'], result: resultImage }]
      }
    })
  }
</script>

<div>
  {#if showAlert}
    <div class="alert uk-alert-danger uk-text-center" uk-alert>
      <p>{alertMsg}</p>
    </div>
  {/if}

  <div 
    class:uk-box-shadow-large={dragover === true} 
    class="uk-placeholder uk-text-center uk-border-rounded" 
    on:dragover|preventDefault="{handleDragover}" 
    on:dragleave|preventDefault="{handleDragleave}" 
    on:drop|preventDefault|stopPropagation="{handleFileDrop}">
    <span uk-icon="icon: cloud-upload"></span>
    <span class="uk-text-middle">{title}</span>
    <div uk-form-custom>
      <input type="file" 
        bind:this={fileInputElement} 
        name={name} 
        on:change|preventDefault="{handleFileChange}" 
        {accept} 
        {multiple} 
        {required}>
      <span class="uk-link">selecting one</span>
    </div>
  </div>

  <div class="uk-placeholder uk-border-rounded">
    {#if previewFiles.length !== 0}
      <div
        transition:fade
        class="uk-grid-match uk-grid-small uk-grid-row-medium uk-child-width-1-3@s uk-child-width-1-2@m uk-child-width-1-3@l" 
        uk-grid uk-scrollspy="cls: {previewAnimation}; target: .preview-item; delay: 150">
          {#each previewFiles as file}
            <FileItem {...file} />
          {/each}
      </div>
    {:else}
      <p transition:fade class="uk-text-center">File previews will show up here...</p>
    {/if}
  </div>
</div>
