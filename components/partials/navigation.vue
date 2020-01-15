<template>
    <section id="page-header" class="page-header-container">
                    <div class="page-header-top">
                        <div class="page-header-top-items container">
                            <div class="row">
                                <div class="col-md-7 col-lg-8 col-sm-2 hide-on-mobile"  id="top-text">
                                    <p class="">The Experts in Real-Time Location Systems</p>
                                </div>
                                <div class="col-md-3 col-lg-2 col-sm-6  top-item-buy">
                                    <a href="tel:+612-9412-2100"><font-awesome-icon :icon="['fas', 'phone-alt']" /> +(612) 9412 2100</a>
                                </div>
                                <div class="col-md-2 col-lg-2 col-sm-6  top-item-enquiry">
                                    <a href="contact#form"><font-awesome-icon :icon="['fas', 'comment-dots']" /> Enquiry</a>
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
                                    <nuxt-link to="/" exact class="nav-link">Home</nuxt-link>
                                    </li>
                                    <li class="nav-item dropdown">
                                            <a class="nav-link dropdown-toggle product-link"  id="navbarDropdown" href=""  role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                Products
                                            </a>
                                            <div class="dropdown-menu" aria-labelledby="navbarDropdown" >
                                                <nuxt-link to="/products/software" class="dropdown-item"><font-awesome-icon :icon="['fas', 'caret-right']" /> Software</nuxt-link>
                                                <nuxt-link to="/products/hardware" class="dropdown-item"><font-awesome-icon :icon="['fas', 'caret-right']" /> Hardware</nuxt-link>
                                            </div>
                                    </li>
                                    <li class="nav-item dropdown">
                                            <a class="nav-link dropdown-toggle application-link" href="" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                Applications
                                            </a>
                                            <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                                                <nuxt-link to="/asset-tracking" class="dropdown-item"><font-awesome-icon :icon="['fas', 'caret-right']" /> Asset Tracking</nuxt-link>
                                                <nuxt-link to="/personnel-safety" class="dropdown-item"><font-awesome-icon :icon="['fas', 'caret-right']" /> Personnel Safety</nuxt-link>
                                                <nuxt-link to="/hand-hygiene-compliance" class="dropdown-item"><font-awesome-icon :icon="['fas', 'caret-right']" /> Hand Hygiene Compliance</nuxt-link>
                                                <nuxt-link to="/temperature-monitoring" class="dropdown-item"><font-awesome-icon :icon="['fas', 'caret-right']" /> Temperature Monitoring</nuxt-link>
                                                <nuxt-link to="/workflow-process-capture" class="dropdown-item"><font-awesome-icon :icon="['fas', 'caret-right']" /> Workflow & Process Capture</nuxt-link>
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

.nuxt-link-active {
    color: #084bd1;
    font-weight: 600;
}

.dropdown-item.nuxt-link-exact-active {
    background-color: #133e94;
    color: #fff !important;
    text-decoration: none;
}

.navbar svg {
    margin-right:10px;
}

@media screen and (max-width: 767px ){
    #top-text {
        display:none;
    }
}

.product-link:hover ~ .dropdown-menu,
.application-link:hover ~ .dropdown-menu{
    display:block;
}

.dropdown-menu:hover {
    display:block;
}

</style>
