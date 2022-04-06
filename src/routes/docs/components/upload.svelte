<svelte:head>
  <title>Components | File Upload</title>
</svelte:head>

<script>
  import FileUploader from "$lib/components/docs/FileUploader.svelte"
  import ProfilePictureUpload from "$lib/components/docs/ProfilePictureUpload.svelte"
  import { pageNavigation } from '$lib/stores/site/Util';

  /** Dynamically set the value of the page navigation store to this pages links and the parent __layout file picks up the change and renders our page nav for us. */
  /** YOU DO THIS ON EVERY PAGE YOU WANT TO HAVE A PAGE NAV */
  pageNavigation.set([
    { title: "Upload Option 1", path: "#option-1"},
    { title: "Upload Option 2", path: "#option-2"},
    { title: "Upload Option 3", path: "#option-3"},
    { title: "Profile Picture Upload", path: "#option-4"}
  ])
</script>

<main uk-height-viewport="expand: true" class="uk-margin-medium-bottom">
  <div class="uk-container">
    <div class="header uk-margin-medium-bottom">
      <h1>Upload Component</h1>
      <p class="uk-text-lead">Uikit file upload component is great, but wouldn't it be great if we could actualy have a preview of the files we are trying to submit in the form. Let's do that shall we... :-D</p>
    </div>

    <div class="uk-margin-top">

      <h4 id="option-1" class="uk-text-muted">
        <a href="#option-1" class="uk-heading uk-heading-bullet">Option 1 (Only images - multiple)</a>
      </h4>
      
      <FileUploader
        name="documents"
        title="Attach your file(s) by dropping them here or"
        accept="image/png, image/jpeg"
        multiple={true}
        required={true}
      />

      <h4 id="option-2" class="uk-text-muted">
        <a href="#option-2" class="uk-heading uk-heading-bullet">Option 2 (Only images - single)</a>        
      </h4>

      <FileUploader
        name="images"
        title="Attach your file(s) by dropping them here or"
        accept="image/png, image/jpeg"
        multiple={false}
        required={true}
      />

      <h4 id="option-3" class="uk-text-muted">
        <a href="#option-3" class="uk-heading uk-heading-bullet">Option 3 (Only Documents (pdf/docs) - mltiple)</a>
      </h4>

      <FileUploader
        name="images"
        title="Attach your file(s) by dropping them here or"
        accept="application/pdf, .doc, .docs"
        multiple={true}
        required={true}
      />

      <h4 id="option-4" class="uk-text-muted">
        <a href="#option-4" class="uk-heading uk-heading-bullet">Profile Picture Upload</a>
      </h4>

      <div class="uk-flex uk-flex-center">
        <ProfilePictureUpload
          name="passportImage"
          title="Browse"
          required={true}
        />
      </div>

    </div>
  </div>
</main>