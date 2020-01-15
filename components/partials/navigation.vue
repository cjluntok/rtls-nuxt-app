<template>
    <section id="page-header" class="page-header-container">
                    <div class="page-header-top">
                        <div class="page-header-top-items container">
                            <div class="row">
                                <div class="col-md-7 col-lg-8 col-sm-2 hide-on-mobile">
                                    <p class="">The Experts in Real-Time Location Systems</p>
                                </div>
                                <div class="col-md-3 col-lg-2 col-sm-6  top-item-buy">
                                    <a href="tel:+612-9412-2100"><i class="fas fa-phone-alt"></i> +(612) 9412 2100</a>
                                </div>
                                <div class="col-md-2 col-lg-2 col-sm-6  top-item-enquiry">
                                    <a href="contact#form"><i class="fas fa-comment-dots"></i> Enquiry</a>
                                </div>
                            </div>
                        </div>
                    </div>

                <div id="page-nav-container" class="page-header-content">
                    <div class="container navigation-container">
                            <nav class="navbar navbar-expand-lg navbar-light">
                                <div id="logo" class="col-sm-8 col-md-6 col-lg-3 page-logo">
                                    <a href="/" class="navbar-brand"><img class="img-fluid" src="@/assets/img/rtls-logo.png" alt="Logo"></a>                               
                                </div>
                                
                                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                <span class="navbar-toggler-icon"></span>
                                </button>
                            
                                <div class="collapse navbar-collapse col-sm-12 col-md-12 col-lg-9" id="navbarSupportedContent">
                                <ul class="navbar-nav">

                                    <li class="nav-item">
                                    <nuxt-link to="/" class="nav-link">Home</nuxt-link>
                                    </li>
                                    <li class="nav-item dropdown">
                                            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                Products
                                            </a>
                                            <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                                                <nuxt-link to="/software" class="dropdown-item"><i class="fas fa-caret-right"></i>Software</nuxt-link>
                                                <nuxt-link to="/hardware" class="dropdown-item"><i class="fas fa-caret-right"></i>Hardware</nuxt-link>
                                            </div>
                                    </li>
                                    <li class="nav-item dropdown <?= ($page == 'solution') ? 'active' : ''?>">
                                            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                Applications
                                            </a>
                                            <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                                                <nuxt-link to="/asset-tracking" class="dropdown-item"><i class="fas fa-caret-right"></i>Asset Tracking</nuxt-link>
                                                <nuxt-link to="/personnel-safety" class="dropdown-item"><i class="fas fa-caret-right"></i>Personnel Safety</nuxt-link>
                                                <nuxt-link to="/hand-hygiene-compliance" class="dropdown-item"><i class="fas fa-caret-right"></i>Hand Hygiene Compliance</nuxt-link>
                                                <nuxt-link to="/temperature-monotoring" class="dropdown-item"><i class="fas fa-caret-right"></i>Temperature Monitoring</nuxt-link>
                                                <nuxt-link to="/workflow-process-capture" class="dropdown-item"><i class="fas fa-caret-right"></i>Workflow & Process Capture</nuxt-link>
                                            </div>
                                    </li>
                                    <li class="nav-item">
                                        <nuxt-link to="/contact" class="nav-link">Contact Us</nuxt-link>
                                    </li>
                                </ul>

                                </div>
                            </nav>
                    </div>
                </div>
               
    </section>
</template>
<script>
export default {
}
</script>
<style lang="scss" scoped>
</style>
