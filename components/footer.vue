<template>
<footer id="page-footer-container" class="page-footer-container">
                <div class="container pt-5">
                  <div class="row">
                    <div class="col-md-6 col-sm-12 col-lg-3 mb-3 text-center">
                            <img src="@/assets/img/rtls-logo.png" alt="Logo" class="img-fluid">
                    </div>
                    <div class="col-md-12 col-lg-9 col-sm-12">

                      <div class="col-md-4 col-sm-6 col-6 p-0 float-left mb-3">
                            <h5 class="mb-4 font-weight-bold text-uppercase">Products</h5>
                            <hr>
                          <ul class="list-group">
                            <li class="list-group-item bg-transparent border-0 p-0 mb-2"><nuxt-link to="/products/software">Software</nuxt-link></li>
                            <li class="list-group-item bg-transparent border-0 p-0 mb-2"><nuxt-link to="/products/hardware">Hardware</nuxt-link></li>
                          </ul>
                      </div>

                      <div class="col-md-4 col-sm-6 col-6 p-0 float-left mb-3">
                            <h5 class="mb-4 font-weight-bold text-uppercase">Applications</h5>
                            <hr>
                          <ul class="list-group">
                            <li class="list-group-item bg-transparent border-0 p-0 mb-2"><nuxt-link to="/asset-tracking">Asset Tracking</nuxt-link></li>
                            <li class="list-group-item bg-transparent border-0 p-0 mb-2"><nuxt-link to="/personnel-safety">Personnel Safety</nuxt-link></li>
                            <li class="list-group-item bg-transparent border-0 p-0 mb-2"><nuxt-link to="/hand-hygiene-compliance">Hand Hygiene Compliance</nuxt-link></li>
                            <li class="list-group-item bg-transparent border-0 p-0 mb-2"><nuxt-link to="/temperature-monitoring">Temperature Monitoring</nuxt-link></li>
                            <li class="list-group-item bg-transparent border-0 p-0 mb-2"><nuxt-link to="/workflow-process-capture">Workflow Process Capture</nuxt-link></li>
                          </ul>
                      </div>  

                      <div class="col-md-4 col-sm-6 col-6 mb-3 p-0 float-left">
                        <h5 class="mb-4 font-weight-bold text-uppercase">More Info</h5>
                        <hr>

                        <ul class="list-group">
                          <!-- <li class="list-group-item bg-transparent border-0 p-0 mb-2">
                            <a href="about">About Us</a>
                          </li> -->
                          <li class="list-group-item bg-transparent border-0 p-0 mb-2">
                            <nuxt-link to="/contact"> Contact Us</nuxt-link>   
                          </li>    
                        </ul>
                      </div>
              
                    </div>
                      <div class="col-md-12">
                        <div class="py-4 d-flex justify-content-center align-items-center footer-copyright">
                          <p class="">Copyright © {{calcYear()}} - Site Name </p>
                        </div>
                      </div>
                  </div>
                </div>
</footer>
</template>
<script>
export default {
  methods: {
    calcYear() {
      let d = new Date()
      return d.getFullYear()
    }
  }
}
</script>
<style lang="scss" scoped>
</style>
