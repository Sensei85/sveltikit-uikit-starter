<script>  
  export let name
  export let title = "Upload Profile Photo"
  export let required
  export let accept = "image/jpeg, image/png"

  let resultImage
  let showAlert = false
  let alertMsg = ""
  let browseFileButtonText = title
  let isReady = false

  const ACCEPTED_MIME_TYPE = [
    "image/png",
    "image/jpeg",
  ]

  const validateFile = ({ file }) => {
    if (!file) return false
    const { type, size } = file
    if (!ACCEPTED_MIME_TYPE.includes(type)) {
      alertMsg = `Sorry, file selected of type: ${type} is not allowed`
      showAlert = true
      return false
    }

    if (size > 2000000) {
      resultImage.src = ""
      alertMsg = `Sorry, file selected exceedes size limit of 2MB`
      showAlert = true
      return false
    }

    isReady = true
    return true
  }

  const handleFile = (/** @type {{ target: object }} */ e) => {
    const file = e.target.files[0]

    if (!file) {
      alertMsg = ""
      showAlert = false
      isReady = false
      browseFileButtonText = title
      return
    }

    const isValidated = validateFile({ /** @type {{ target: object }}*/ file })
    if (!isValidated) return

    alertMsg = ""
    showAlert = false
    browseFileButtonText = "CHANGE"

    const reader = new FileReader()
    reader.readAsDataURL(file)
    reader.onload = () => {
      resultImage.src = reader.result
    }
  }
</script>

<div class="uk-flex uk-flex-column uk-flex-center">
  <div>
    {#if showAlert}
      <div class="alert uk-alert-danger uk-text-center" uk-alert>
        <p>{alertMsg}</p>
      </div>
    {/if}
  </div>
  <div class="uk-width-auto">
    <div class="uk-placeholder uk-text-center uk-border-rounded">
      {#if !isReady}
        <span>
          <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" height="150" viewBox="-27 24 100 100" width="150" xml:space="preserve"><defs><circle cx="23" cy="74" id="a" r="50"/></defs><use fill="#F5EEE5" overflow="visible" xlink:href="#a"/><clipPath id="b"><use overflow="visible" xlink:href="#a"/></clipPath><g clip-path="url(#b)"><defs><path d="M36 95.9c0 4 4.7 5.2 7.1 5.8 7.6 2 22.8 5.9 22.8 5.9 3.2 1.1 5.7 3.5 7.1 6.6v9.8H-27v-9.8c1.3-3.1 3.9-5.5 7.1-6.6 0 0 15.2-3.9 22.8-5.9 2.4-.6 7.1-1.8 7.1-5.8V85h26v10.9z" id="c"/></defs><use fill="#E6C19C" overflow="visible" xlink:href="#c"/><clipPath id="d"><use overflow="visible" xlink:href="#c"/></clipPath><path clip-path="url(#d)" d="M23.2 35h.2c3.3 0 8.2.2 11.4 2 3.3 1.9 7.3 5.6 8.5 12.1 2.4 13.7-2.1 35.4-6.3 42.4-4 6.7-9.8 9.2-13.5 9.4h-.6c-3.7-.2-9.5-2.7-13.5-9.4-4.2-7-8.7-28.7-6.3-42.4 1.2-6.5 5.2-10.2 8.5-12.1 3.2-1.8 8.1-2 11.4-2h.2z" fill="#D4B08C"/></g><path d="M22.6 40c19.1 0 20.7 13.8 20.8 15.1 1.1 11.9-3 28.1-6.8 33.7-4 5.9-9.8 8.1-13.5 8.3h-.5c-3.8-.3-9.6-2.5-13.6-8.4-3.8-5.6-7.9-21.8-6.8-33.8C2.3 53.7 3.5 40 22.6 40z" fill="#F2CEA5"/></svg>
        </span>
      {:else}
        <span>
          <img bind:this={resultImage} src="" width="150" height="150" alt="">
        </span>
      {/if}
    </div>
  </div>
  <div class="uk-text-center">
    <div uk-form-custom>
      <input
        on:change|preventDefault={handleFile} 
        type="file" {name} {accept} {required}>
      <button class="uk-button uk-button-primary" type="button" tabindex="-1">{browseFileButtonText}</button>
    </div>
  </div>
</div>