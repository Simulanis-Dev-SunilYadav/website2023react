import React from 'react'

function SignUp() {
  return (
    <>
         <section className="sign-up-in-section bg-dark ptb-40 loginbg">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-10 col-12">
                        <div className="pricing-content-wrap bg-custom-light rounded-custom shadow-lg">
                            <div className="price-feature-col pricing-feature-info text-white left-radius p-5 pt-4 order-1 order-lg-0 logignty">
                                <a href="./" className="mb-5 d-none d-xl-block d-lg-block"><img src="assets/img/logo_white.png" alt="logo" className="img-fluid" /></a>
                            </div>
                            <div className="price-feature-col pricing-action-info p-5 right-radius bg-light-subtle order-0 order-lg-1">
                                <a href="./" className="mb-5 d-block d-xl-none d-lg-none"><img src="assets/img/logo-color.png" alt="logo" className="img-fluid" /></a>
                                <h1 className="h3">Create an Account</h1>
                                <p className="text-muted">Please log in to access your account web-enabled methods of innovative niches.</p>
                                <form action="#" className="mt-2 register-form">
                                    {/* <div className="row">
                                        <div className="col-sm-12 ">
                                            <label for="email" className="mb-1">Email <span className="text-danger">*</span></label>
                                            <div className="input-group mb-3">
                                                <input type="email" className="form-control" placeholder="Email" id="email" required aria-label="email" />
                                            </div>
                                        </div>
                                        <div className="col-sm-12">
                                            <label for="password" className="mb-1">Password <span
                                                    className="text-danger">*</span></label>
                                            <div className="input-group mb-3">
                                                <input type="password" className="form-control" placeholder="Password" id="password" required aria-label="Password" />
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <button type="submit" className="btn btn-primary mt-4 d-block w-100">Submit</button>
                                        </div>
                                    </div> */}
                                    <div className="row">
                                        <div className="col-sm-6">
                                            <label for="name" className="mb-1">Name <span className="text-danger">*</span></label>
                                            <div className="input-group mb-3">
                                                <input type="text" className="form-control" placeholder="Name" required="" aria-label="name" />
                                            </div>
                                        </div>
                                        <div className="col-sm-6 ">
                                            <label for="email" className="mb-1">Email <span className="text-danger">*</span></label>
                                            <div className="input-group mb-3">
                                                <input type="email" className="form-control" placeholder="Email" required="" aria-label="email" />
                                            </div>
                                        </div>
                                        <div className="col-sm-12">
                                            <label for="Phone" className="mb-1">Phone</label>
                                            <div className="input-group mb-3">
                                                <input type="tel" className="form-control" placeholder="Phone" aria-label="Phone" />
                                            </div>
                                        </div>
                                        <div className="col-sm-6">
                                            <label for="password" className="mb-1">Password <span className="text-danger">*</span></label>
                                            <div className="input-group mb-3">
                                                <input type="password" className="form-control" placeholder="Password" required="" aria-label="Password" />
                                            </div>
                                        </div>
                                        <div className="col-sm-6">
                                            <label for="password" className="mb-1">Confirm Password <span className="text-danger">*</span></label>
                                            <div className="input-group mb-3">
                                                <input type="password" className="form-control" placeholder="Password" required="" aria-label="Password" />
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <div className="form-check d-flex">
                                                <input className="form-check-input me-2" type="checkbox" value="" id="flexCheckChecked" />
                                                <label className="form-check-label" for="flexCheckChecked">
                                                    I have read and agree to the <a href="#" className="text-decoration-none">Terms
                                                        &amp; Conditions</a>
                                                </label>
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <button type="submit" className="btn btn-primary mt-3 d-block w-100">Submit</button>
                                        </div>
                                    </div>
                                    <div className="position-relative d-flex align-items-center justify-content-center mt-3 py-3">
                                        <span className="divider-bar"></span>
                                        <h6 className="position-absolute text-center divider-text bg-light-subtle mb-0">Or</h6>
                                    </div>
                                    <p className="text-center text-muted mt-3 mb-0 fw-medium font-monospace">Already have an account ? <a href="/login" className="text-decoration-none">Sign in</a></p>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default SignUp