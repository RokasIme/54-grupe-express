export function sectionTitleHtml(title, description) {
  return `
    <div class="row">
      <div class="col-12">
        <div class="section-title">
            <h1>${title}</h1>
            <p>${description}</p>
        </div>
      </div>
    </div>`;
}
