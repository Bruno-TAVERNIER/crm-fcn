'use strict';

customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">crm-fcn documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                                <li class="link">
                                    <a href="properties.html" data-type="chapter-link">
                                        <span class="icon ion-ios-apps"></span>Properties
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-toggle="collapse" ${ isNormalMode ?
                                'data-target="#modules-links"' : 'data-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AppModule-cb2defe51c9dd53f6efe4aacbbfd01027abef7722e892c72b87af288b6c2d3a888b5065cad00340baf184f61ae94ce509e01d450538e5cd1d69716835f64ac90"' : 'data-target="#xs-components-links-module-AppModule-cb2defe51c9dd53f6efe4aacbbfd01027abef7722e892c72b87af288b6c2d3a888b5065cad00340baf184f61ae94ce509e01d450538e5cd1d69716835f64ac90"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AppModule-cb2defe51c9dd53f6efe4aacbbfd01027abef7722e892c72b87af288b6c2d3a888b5065cad00340baf184f61ae94ce509e01d450538e5cd1d69716835f64ac90"' :
                                            'id="xs-components-links-module-AppModule-cb2defe51c9dd53f6efe4aacbbfd01027abef7722e892c72b87af288b6c2d3a888b5065cad00340baf184f61ae94ce509e01d450538e5cd1d69716835f64ac90"' }>
                                            <li class="link">
                                                <a href="components/AppComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AppRoutingModule.html" data-type="entity-link" >AppRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/ClientsModule.html" data-type="entity-link" >ClientsModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-ClientsModule-3da379d60f0e0c0ae18af3573419c21401a1a690f05d73224ba972b9cd2c6bfa7db0fcb3727181d0d0e7683e3bfd91de74fb0037c8f859808c767c23bb1d1999"' : 'data-target="#xs-components-links-module-ClientsModule-3da379d60f0e0c0ae18af3573419c21401a1a690f05d73224ba972b9cd2c6bfa7db0fcb3727181d0d0e7683e3bfd91de74fb0037c8f859808c767c23bb1d1999"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-ClientsModule-3da379d60f0e0c0ae18af3573419c21401a1a690f05d73224ba972b9cd2c6bfa7db0fcb3727181d0d0e7683e3bfd91de74fb0037c8f859808c767c23bb1d1999"' :
                                            'id="xs-components-links-module-ClientsModule-3da379d60f0e0c0ae18af3573419c21401a1a690f05d73224ba972b9cd2c6bfa7db0fcb3727181d0d0e7683e3bfd91de74fb0037c8f859808c767c23bb1d1999"' }>
                                            <li class="link">
                                                <a href="components/PageAddClientComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PageAddClientComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/PageEditClientComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PageEditClientComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/PageListClientsComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PageListClientsComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/ClientsRoutingModule.html" data-type="entity-link" >ClientsRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/CoreModule.html" data-type="entity-link" >CoreModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-CoreModule-d53efc0a70bdf631cf503862b648a9a28bd4f03c0350436fb912b0cda563022ab42bb31193fbe11c97955d4c8032669e541437e7e5d904f51185336dcb7b4715"' : 'data-target="#xs-components-links-module-CoreModule-d53efc0a70bdf631cf503862b648a9a28bd4f03c0350436fb912b0cda563022ab42bb31193fbe11c97955d4c8032669e541437e7e5d904f51185336dcb7b4715"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-CoreModule-d53efc0a70bdf631cf503862b648a9a28bd4f03c0350436fb912b0cda563022ab42bb31193fbe11c97955d4c8032669e541437e7e5d904f51185336dcb7b4715"' :
                                            'id="xs-components-links-module-CoreModule-d53efc0a70bdf631cf503862b648a9a28bd4f03c0350436fb912b0cda563022ab42bb31193fbe11c97955d4c8032669e541437e7e5d904f51185336dcb7b4715"' }>
                                            <li class="link">
                                                <a href="components/FooterComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >FooterComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/HeaderComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >HeaderComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/NavComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >NavComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/IconsModule.html" data-type="entity-link" >IconsModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-IconsModule-c4a0dbfdb905759b3718c0b52eea6c6a357f20cf3b8e16b255041645f82381b7e7e36475bed1d70d3af2b9da741f8a52de466cac971ce49893846bfcbeab8a1a"' : 'data-target="#xs-components-links-module-IconsModule-c4a0dbfdb905759b3718c0b52eea6c6a357f20cf3b8e16b255041645f82381b7e7e36475bed1d70d3af2b9da741f8a52de466cac971ce49893846bfcbeab8a1a"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-IconsModule-c4a0dbfdb905759b3718c0b52eea6c6a357f20cf3b8e16b255041645f82381b7e7e36475bed1d70d3af2b9da741f8a52de466cac971ce49893846bfcbeab8a1a"' :
                                            'id="xs-components-links-module-IconsModule-c4a0dbfdb905759b3718c0b52eea6c6a357f20cf3b8e16b255041645f82381b7e7e36475bed1d70d3af2b9da741f8a52de466cac971ce49893846bfcbeab8a1a"' }>
                                            <li class="link">
                                                <a href="components/IconCloseComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >IconCloseComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/IconDeleteComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >IconDeleteComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/IconEditComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >IconEditComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/IconNavComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >IconNavComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/LoginModule.html" data-type="entity-link" >LoginModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-LoginModule-b276174cee90baab1a72c9b6b90d9a4fa5f8805428a3101e9256296de67b700b35251b9cd6cbe9eac9d4cfe8f59e7f348e0bcad82a508e87d0d0518506d9c153"' : 'data-target="#xs-components-links-module-LoginModule-b276174cee90baab1a72c9b6b90d9a4fa5f8805428a3101e9256296de67b700b35251b9cd6cbe9eac9d4cfe8f59e7f348e0bcad82a508e87d0d0518506d9c153"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-LoginModule-b276174cee90baab1a72c9b6b90d9a4fa5f8805428a3101e9256296de67b700b35251b9cd6cbe9eac9d4cfe8f59e7f348e0bcad82a508e87d0d0518506d9c153"' :
                                            'id="xs-components-links-module-LoginModule-b276174cee90baab1a72c9b6b90d9a4fa5f8805428a3101e9256296de67b700b35251b9cd6cbe9eac9d4cfe8f59e7f348e0bcad82a508e87d0d0518506d9c153"' }>
                                            <li class="link">
                                                <a href="components/PageForgotComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PageForgotComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/PageResetComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PageResetComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/PageSignInComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PageSignInComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/PageSignUpComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PageSignUpComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/LoginRoutingModule.html" data-type="entity-link" >LoginRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/OrdersModule.html" data-type="entity-link" >OrdersModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-OrdersModule-14b91df1961191e1398f2631648555bd744f6ca0fe7ad93909a771eb8aca42f2e9eaab6bf20dc1f0f7241978488c1d36a95dc5d42cf1cf2248d7c4f7e445a7d6"' : 'data-target="#xs-components-links-module-OrdersModule-14b91df1961191e1398f2631648555bd744f6ca0fe7ad93909a771eb8aca42f2e9eaab6bf20dc1f0f7241978488c1d36a95dc5d42cf1cf2248d7c4f7e445a7d6"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-OrdersModule-14b91df1961191e1398f2631648555bd744f6ca0fe7ad93909a771eb8aca42f2e9eaab6bf20dc1f0f7241978488c1d36a95dc5d42cf1cf2248d7c4f7e445a7d6"' :
                                            'id="xs-components-links-module-OrdersModule-14b91df1961191e1398f2631648555bd744f6ca0fe7ad93909a771eb8aca42f2e9eaab6bf20dc1f0f7241978488c1d36a95dc5d42cf1cf2248d7c4f7e445a7d6"' }>
                                            <li class="link">
                                                <a href="components/PageAddOrderComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PageAddOrderComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/PageEditOrderComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PageEditOrderComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/PageListOrdersComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PageListOrdersComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/OrdersRoutingModule.html" data-type="entity-link" >OrdersRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/PageNotFoundModule.html" data-type="entity-link" >PageNotFoundModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-PageNotFoundModule-ff71632f17a3e64bde3955e833e971a2134de7f34cdcdc7d0fe2a9dbfca13b639bd6b40cd40c4dadb24c0bbabffe3c444550cabd13884b36870ed810250c0bc5"' : 'data-target="#xs-components-links-module-PageNotFoundModule-ff71632f17a3e64bde3955e833e971a2134de7f34cdcdc7d0fe2a9dbfca13b639bd6b40cd40c4dadb24c0bbabffe3c444550cabd13884b36870ed810250c0bc5"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-PageNotFoundModule-ff71632f17a3e64bde3955e833e971a2134de7f34cdcdc7d0fe2a9dbfca13b639bd6b40cd40c4dadb24c0bbabffe3c444550cabd13884b36870ed810250c0bc5"' :
                                            'id="xs-components-links-module-PageNotFoundModule-ff71632f17a3e64bde3955e833e971a2134de7f34cdcdc7d0fe2a9dbfca13b639bd6b40cd40c4dadb24c0bbabffe3c444550cabd13884b36870ed810250c0bc5"' }>
                                            <li class="link">
                                                <a href="components/PageNotFoundComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PageNotFoundComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/PageNotFoundRoutingModule.html" data-type="entity-link" >PageNotFoundRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/SharedModule.html" data-type="entity-link" >SharedModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-SharedModule-60c7cc76558464d553dc25692e1725f91394a5837e0c029562a223a409a407d3a53f905533706eca86d9b6bfdacbcbe60dbc3d73441be1a97413ee289ee00125"' : 'data-target="#xs-components-links-module-SharedModule-60c7cc76558464d553dc25692e1725f91394a5837e0c029562a223a409a407d3a53f905533706eca86d9b6bfdacbcbe60dbc3d73441be1a97413ee289ee00125"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-SharedModule-60c7cc76558464d553dc25692e1725f91394a5837e0c029562a223a409a407d3a53f905533706eca86d9b6bfdacbcbe60dbc3d73441be1a97413ee289ee00125"' :
                                            'id="xs-components-links-module-SharedModule-60c7cc76558464d553dc25692e1725f91394a5837e0c029562a223a409a407d3a53f905533706eca86d9b6bfdacbcbe60dbc3d73441be1a97413ee289ee00125"' }>
                                            <li class="link">
                                                <a href="components/BtnComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >BtnComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/TableLightComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >TableLightComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/TemplatesModule.html" data-type="entity-link" >TemplatesModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-TemplatesModule-c9e5b6eb5ecb62d1c196d50fb6181dd7b55f5fd120090293736fa4bc76f53189ed9e4557cb4545d5b99d61ec76a71cf5b5c38212fa78f56756d53135bfc4cc52"' : 'data-target="#xs-components-links-module-TemplatesModule-c9e5b6eb5ecb62d1c196d50fb6181dd7b55f5fd120090293736fa4bc76f53189ed9e4557cb4545d5b99d61ec76a71cf5b5c38212fa78f56756d53135bfc4cc52"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-TemplatesModule-c9e5b6eb5ecb62d1c196d50fb6181dd7b55f5fd120090293736fa4bc76f53189ed9e4557cb4545d5b99d61ec76a71cf5b5c38212fa78f56756d53135bfc4cc52"' :
                                            'id="xs-components-links-module-TemplatesModule-c9e5b6eb5ecb62d1c196d50fb6181dd7b55f5fd120090293736fa4bc76f53189ed9e4557cb4545d5b99d61ec76a71cf5b5c38212fa78f56756d53135bfc4cc52"' }>
                                            <li class="link">
                                                <a href="components/TemplateContainerComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >TemplateContainerComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/TemplateFullWidthComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >TemplateFullWidthComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/UiModule.html" data-type="entity-link" >UiModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-UiModule-d1d135e71bea3246d58422ef557131e079a45a1ce155cffc6946eb1c1994bc1ced7b33b05752f6478aa9f198c4fcfd8730c7c5d1d247ee930c3c20517a6ea428"' : 'data-target="#xs-components-links-module-UiModule-d1d135e71bea3246d58422ef557131e079a45a1ce155cffc6946eb1c1994bc1ced7b33b05752f6478aa9f198c4fcfd8730c7c5d1d247ee930c3c20517a6ea428"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-UiModule-d1d135e71bea3246d58422ef557131e079a45a1ce155cffc6946eb1c1994bc1ced7b33b05752f6478aa9f198c4fcfd8730c7c5d1d247ee930c3c20517a6ea428"' :
                                            'id="xs-components-links-module-UiModule-d1d135e71bea3246d58422ef557131e079a45a1ce155cffc6946eb1c1994bc1ced7b33b05752f6478aa9f198c4fcfd8730c7c5d1d247ee930c3c20517a6ea428"' }>
                                            <li class="link">
                                                <a href="components/Ui2Component.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >Ui2Component</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/UiComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UiComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                </ul>
                </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#miscellaneous-links"'
                            : 'data-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <a data-type="chapter-link" href="routes.html"><span class="icon ion-ios-git-branch"></span>Routes</a>
                        </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});