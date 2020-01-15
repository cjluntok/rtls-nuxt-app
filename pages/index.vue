<template>
  <div class="__main-content">
        <section class="page-content">
        <section class="page-content page-software-card-container">
            <div class="page-content-item">
                <div class="page-content-inner container">
                    <h2 class="page-content-title">UNIFIED VISION SOLUTION FOR RTLS</h2>
                    <p>Our end-to-end solution provides visibility for the location and condition of people and assets at work. At the heart of the solution is a software platform that ties this information to customers’ processes to help make better business decisions. Unlike RTLS solutions that operate as islands, the UVS platform combines information from assets company wide delivering insight across the delivery chain. The rich workflow engine has the flexibility to model virtually any business process. UVS has proven to be the enterprise RTLS platform that breaks traditional silos of asset visibility to create a unified view across the enterprise.</p>
                    <div class="row page-software-card">

                        <div class="col-md-6">
                            <div class="card">
                                <h3 class="card_title card_title-default">
                                <font-awesome-icon :icon="['fas', 'wifi']" /> Wireless Technologies
                                </h3>
                                <div class="card_body">
                                    <ul>
                                        <li>Wi-Fi</li>
                                        <li>GPS</li>
                                        <li>Bluetooth Low Energy (BLE)</li>
                                        <li>Infrared (IR)</li>
                                        <li>Passive Radio-Frequency Identification (RFID)</li>
                                        <li>Third-Party (Cellular, Satellite, UWB, LoRa)</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="card">
                                <h3 class="card_title card_title-default">
                                <font-awesome-icon :icon="['fas', 'desktop']" /> SENSOR TYPES
                                </h3>
                                <div class="card_body">
                                    <ul>
                                        <li>Location</li>
                                        <li>Temperature</li>
                                        <li>Humidity</li>
                                        <li>Vibration</li>
                                        <li>Motion & Direction</li>
                                        <li>Man-Down</li>
                                        <li>Intrinsically Safe (Explosion Proof)</li>
                                        <li>Indoor & Outdoor</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
        <!-- #page-content-products here if ever -->
    

</section>

    <section class="page-content">
        <div class="page-content-item page-uvs page-full-width">
            <div class="page-content-inner container-fluid">
                <div class="row">
                    <div class="col-md-6 page-content-text">
                        <h2 class="page-content-title">AIRISTA UNIFIED VISION SOLUTION</h2>
                        <p>AiRISTA Unified Vision Solution is modern business intelligence at its best. An easy-to-use Real-Time Location System (RTLS) software platform, AiRISTA Unified Vision Solution offers unmatched tracking and reporting through cloud or premise based deployments. With proven scalability of over 130,000 endpoints in a single deployment, our software addresses needs for companies in hospitality, healthcare, manufacturing, government services, and other dynamic industries. Discover how our RTLS platform can help you achieve smarter business growth.</p>
                        <p><nuxt-link to="/products/software" class="btn btn-primary page-content-link">Learn more</nuxt-link></p>
                    </div>
                    <div class="col-md-6 page-content-img uvs-bg">
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section class="page-content">
        <div class="page-content-item page-solution-container">
            <div class="page-content-inner page-solution-inner container">
                <h2 class="page-content-title">Applications</h2>
                <section class="common-card page-content-solution py-5">
                        <div class="row">
                            <div class="col-md-4 col-lg-2 page-common-card">                                
                                <nuxt-link to="/asset-tracking">
                                    <div class="card mb-5 mb-lg-0">                                    
                                        <div class="card-body">
                                        <h5 class="card-title text-uppercase text-center"><font-awesome-icon :icon="['fas', 'eye']" />Asset Tracking</h5>
                                        <hr>
                                        <p class="card-text">Track equipment, asset inventories, and components.</p>
                                        </div>
                                    </div>
                                </nuxt-link>
                            </div>

                            <div class="col-md-4 col-lg-2 page-common-card">
                                <nuxt-link to="/personnel-safety">                               
                                  <div class="card mb-5 mb-lg-0">
                                      <div class="card-body">
                                      <h5 class="card-title text-uppercase text-center"><font-awesome-icon :icon="['fas', 'user-shield']" />Personal Safety</h5>
                                      <hr>
                                      <p class="card-text">Help reduce emergency response times and more.</p>
                                      </div>
                                  </div>
                                </nuxt-link>   
                            </div>

                            <div class="col-md-4 col-lg-2 page-common-card">
                                <nuxt-link to="hand-hygiene-compliance">                                
                                    <div class="card mb-5 mb-lg-0">                                    
                                        <div class="card-body">
                                        <h5 class="card-title text-uppercase text-center"><font-awesome-icon :icon="['fas', 'user-check']" />Hand Hygiene Compliance</h5>
                                        <hr>
                                        <p class="card-text">Motivate, track, or monitor compliance for hand washing.</p>
                                        </div>
                                    </div>
                                </nuxt-link>
                            </div>

                            <div class="col-md-4 col-lg-2 page-common-card"> 
                                <nuxt-link to="temperature-monitoring">                              
                                    <div class="card mb-5 mb-lg-0">                                    
                                        <div class="card-body">
                                        <h5 class="card-title text-uppercase text-center"><font-awesome-icon :icon="['fas', 'temperature-high']" />Temperature Monitoring</h5>
                                        <hr>
                                        <p class="card-text">Automate temperature monitoring with alerts and compliance reports.</p>
                                        </div>
                                    </div>
                                </nuxt-link> 
                            </div>

                            <div class="col-md-4 col-lg-2 page-common-card">
                                <nuxt-link to="workflow-process-capture">                                
                                    <div class="card mb-5 mb-lg-0">                                    
                                        <div class="card-body">
                                        <h5 class="card-title text-uppercase text-center"><font-awesome-icon :icon="['fas', 'network-wired']" />Workflow & Process Capture</h5>
                                        <hr>
                                        <p class="card-text">Create process efficiencies using RTLS-powered workflows.</p>
                                        </div>
                                    </div>
                                </nuxt-link>
                            </div>
                        </div>
                </section>
            </div>
        </div>
    </section>

    <section class="page-content">
        <div class="page-content-item page-bgtext-container bg-gartner">
            <div class="page-content-inner container">
                <div class="row">
                    <div class="col-md-6 page-content-text">
                        <h2>Gartner</h2>
                        <p>AiRISTA Flow Recognized in 2019 & 2018 Gartner Magic Quadrant for Indoor Location Services, Worldwide</p>
                    </div>
                    <div class="col-md-6 page-content-img">
                        <img src="@/assets/img/gartner.png" alt="Gartner-2019-MQ-Banner_White_Square" class="img-fluid">
                    </div>
                </div>
            </div>
        </div>
    </section>
    

    <section class="page-content">
        <div class="page-content-item page-bottom-banner">
            <img src="@/assets/img/banner-bottom2.jpg" alt="Banner" class="img-fluid">
        </div>
    </section>
    </div>

</template>

<script>
export default {
    layout : "home"
}
</script>

<style style="css" scoped>

.common-card svg {
    display: block;
    font-size: 1.6em;
    margin: 0 auto;
}
</style>
