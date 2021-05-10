import Logo from "../assets/hi.png";

function LogoApp() {
  return (
    <div className="Logo-app pb-40">
      <div class=" d-flex align-items-center ">
        <h1 class="h1 mb-3 fw-normal text-white">LOGIN</h1>
        <img class="mb-4" src={Logo} alt="" width="100" height="100" />
      </div>
      <h1 class="h1 mb-3 fw-normal text-end text-white mt-50">HERE!</h1>
    </div>
  );
}

export default LogoApp;
