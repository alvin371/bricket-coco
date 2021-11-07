import './../style/vendor/global/global.min'
import './../style/vendor/bootstrap-select/dist/js/bootstrap-select.min'
import './../style/js/custom.min'
import './../style/js/deznav-init'
import './../style/vendor/owl-carousel/owl.carousel'



const Navigation = () => {
    return (
        <div>
            <div class="deznav">
                <div class="deznav-scroll">
                    <ul class="metismenu" id="menu">
                        <li><a class="has-arrow ai-icon" href="javascript:void()" aria-expanded="false">
                            <i class="flaticon-381-networking"></i>
                            <span class="nav-text">Dashboard</span>
                        </a>
                            <ul aria-expanded="false">
                                <li><a href="index.html">Dashboard</a></li>
                                <li><a href="event.html">Product</a></li>
                                <li><a href="event-detail.html">Product Highlights</a></li>
                                <li><a href="customers.html">Home Page Informations</a></li>
                                <li><a href="analytics.html" class="has-arrow" href="javascript:void()">FAQ</a>
                                    <ul>
                                        <li><a href="">FAQ</a></li>
                                        <li><a href="">Question List</a></li>
                                    </ul>
                                </li>
                                <li><a href="">User Managements</a></li>
                            </ul>
                        </li>
                        <li><a href="widget-basic.html" class="ai-icon" aria-expanded="false">
                            <i class="flaticon-381-settings-2"></i>
                            <span class="nav-text">Logout</span>
                        </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Navigation;