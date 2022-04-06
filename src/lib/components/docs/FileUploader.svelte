<script>
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

  const handleDragover = () => dragover = true

  const handleDragleave = () => dragover = false

  const handleFileDrop = (/** @type {object} */ e) => {
    dragover = false
    files = [...e.dataTransfer.files]
    fileInputElement.files = e.dataTransfer.files
    preparePreviewFiles({ files })
  }

  const handleFileChange = (/** @type {object} */ e) => {
    if (!e.target.files) return
    files = [...e.target.files]
    preparePreviewFiles({ files })
  }

  const ifResultIsDoc = (/** @type {string} */ type) => {
    if (DOCS_MIME_TYPES.includes(type)) return docImage
    if (type === "application/pdf") return pdfImage
  }

  const preparePreviewFiles = ({ files }) => {
    previewFiles = []
    files.forEach((/** @type {Blob} */ file) => {
      if (!ACCEPTED_MIME_TYPE.includes(file.type)) {
        console.log(file.type)
        if (multiple) {
          alertMsg = `Sorry, one or more of the files you selected is not allowed`
        }
        alertMsg = `Sorry, file selected of type: ${file.type} is not allowed`
        previewFiles = []
        showAlert = true
        return
      }

      if (file.size > 2000000) {
        if (multiple) {
          alertMsg = "Sorry, one or more of the files you selected exceeds the size limit of 2MB"
        }
        alertMsg = `Sorry, file selected exceedes size limit of 2MB`
        previewFiles = []
        showAlert = true
        return
      }

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
        previewFiles = [{ name: file['name'], result: resultImage }]
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
        class="uk-grid-match uk-grid-small uk-grid-row-medium uk-child-width-1-3@s uk-child-width-1-2@m uk-child-width-1-4@l" 
        uk-grid uk-scrollspy="cls: {previewAnimation}; target: .preview-item; delay: 150">
          {#each previewFiles as file}
            <FileItem {...file} />
          {/each}
      </div>
    {:else}
      <p class="uk-text-center">File previews will show up here...</p>
    {/if}
  </div>
</div>