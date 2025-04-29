import { pageTitle } from "../components/pageTitle.js";
import { baseTemplate } from "../templates/baseTemplate.js";

export function page404(req, res) {
  console.log(req.params.error);

  res.send(
    baseTemplate(
      "404",
      -1,
      `
      <section class="container">
            <div class="row">
                <div class="col-12 col-md-6 col-lg-4 m-lg-2 col-xl-3 m-xl-3">
                    <h1 class="main-title">404</h1>
                    <p class="sub-title">Lost in space</p>
                    <div class="line"></div>
                    <p class="description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora ullam, tempore ipsam unde omnis eum laboriosam voluptates nam non saepe qui sapiente mollitia necessitatibus provident id quo aliquam exercitationem temporibus.</p>
                    <div class="btn-group">
                        <a class="btn" href="/">Go home</a>
                        <a class="btn btn-white" style="margin-left: 20px;" href="#">Back</a>
                    </div>
                </div>
                <img class="col-12 col-md-6 col-lg-4 col-xl-3" src="/img/astronautas.png" alt="Astronautas su telefonu rankose">
            </div>
        </section>`
    )
  );
}
