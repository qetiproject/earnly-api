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
                    <a href="index.html" data-type="index-link">earnly-api documentation</a>
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
                                    <span class="icon ion-ios-paper"></span>
                                        README
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
                            <div class="menu-toggler linked" data-bs-toggle="collapse" ${ isNormalMode ?
                                'data-bs-target="#modules-links"' : 'data-bs-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/AuthModule.html" data-type="entity-link" >AuthModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-AuthModule-9679888e0138bf8d78ece25915f2cea39baa8a5e598cdad0a723f25e83437cba4815f38c83755e5f73054eabae975c4f2a44dea49323de703a555f0586095247"' : 'data-bs-target="#xs-controllers-links-module-AuthModule-9679888e0138bf8d78ece25915f2cea39baa8a5e598cdad0a723f25e83437cba4815f38c83755e5f73054eabae975c4f2a44dea49323de703a555f0586095247"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-AuthModule-9679888e0138bf8d78ece25915f2cea39baa8a5e598cdad0a723f25e83437cba4815f38c83755e5f73054eabae975c4f2a44dea49323de703a555f0586095247"' :
                                            'id="xs-controllers-links-module-AuthModule-9679888e0138bf8d78ece25915f2cea39baa8a5e598cdad0a723f25e83437cba4815f38c83755e5f73054eabae975c4f2a44dea49323de703a555f0586095247"' }>
                                            <li class="link">
                                                <a href="controllers/AuthController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AuthController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-AuthModule-9679888e0138bf8d78ece25915f2cea39baa8a5e598cdad0a723f25e83437cba4815f38c83755e5f73054eabae975c4f2a44dea49323de703a555f0586095247"' : 'data-bs-target="#xs-injectables-links-module-AuthModule-9679888e0138bf8d78ece25915f2cea39baa8a5e598cdad0a723f25e83437cba4815f38c83755e5f73054eabae975c4f2a44dea49323de703a555f0586095247"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AuthModule-9679888e0138bf8d78ece25915f2cea39baa8a5e598cdad0a723f25e83437cba4815f38c83755e5f73054eabae975c4f2a44dea49323de703a555f0586095247"' :
                                        'id="xs-injectables-links-module-AuthModule-9679888e0138bf8d78ece25915f2cea39baa8a5e598cdad0a723f25e83437cba4815f38c83755e5f73054eabae975c4f2a44dea49323de703a555f0586095247"' }>
                                        <li class="link">
                                            <a href="injectables/AuthService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AuthService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/IncomeModule.html" data-type="entity-link" >IncomeModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-IncomeModule-1ace08b3895d762f8f0c119037f9c30d3349ba0aaa6047b655c7c6e52eb62a3b2e626d5774d3b3ee61ec866f28ac2e202c13be18f1f073440b92fb54b702b505"' : 'data-bs-target="#xs-controllers-links-module-IncomeModule-1ace08b3895d762f8f0c119037f9c30d3349ba0aaa6047b655c7c6e52eb62a3b2e626d5774d3b3ee61ec866f28ac2e202c13be18f1f073440b92fb54b702b505"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-IncomeModule-1ace08b3895d762f8f0c119037f9c30d3349ba0aaa6047b655c7c6e52eb62a3b2e626d5774d3b3ee61ec866f28ac2e202c13be18f1f073440b92fb54b702b505"' :
                                            'id="xs-controllers-links-module-IncomeModule-1ace08b3895d762f8f0c119037f9c30d3349ba0aaa6047b655c7c6e52eb62a3b2e626d5774d3b3ee61ec866f28ac2e202c13be18f1f073440b92fb54b702b505"' }>
                                            <li class="link">
                                                <a href="controllers/IncomeController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >IncomeController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-IncomeModule-1ace08b3895d762f8f0c119037f9c30d3349ba0aaa6047b655c7c6e52eb62a3b2e626d5774d3b3ee61ec866f28ac2e202c13be18f1f073440b92fb54b702b505"' : 'data-bs-target="#xs-injectables-links-module-IncomeModule-1ace08b3895d762f8f0c119037f9c30d3349ba0aaa6047b655c7c6e52eb62a3b2e626d5774d3b3ee61ec866f28ac2e202c13be18f1f073440b92fb54b702b505"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-IncomeModule-1ace08b3895d762f8f0c119037f9c30d3349ba0aaa6047b655c7c6e52eb62a3b2e626d5774d3b3ee61ec866f28ac2e202c13be18f1f073440b92fb54b702b505"' :
                                        'id="xs-injectables-links-module-IncomeModule-1ace08b3895d762f8f0c119037f9c30d3349ba0aaa6047b655c7c6e52eb62a3b2e626d5774d3b3ee61ec866f28ac2e202c13be18f1f073440b92fb54b702b505"' }>
                                        <li class="link">
                                            <a href="injectables/IncomeService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >IncomeService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/UserModule.html" data-type="entity-link" >UserModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-UserModule-d15d8cc4da7abb3ec6def1887f433de634ad8090c79ad1b59a6ef20952b70bfc378a848acba607c5ce228579d404bf1c34d0ce761f3305e7682c71977b37800b"' : 'data-bs-target="#xs-controllers-links-module-UserModule-d15d8cc4da7abb3ec6def1887f433de634ad8090c79ad1b59a6ef20952b70bfc378a848acba607c5ce228579d404bf1c34d0ce761f3305e7682c71977b37800b"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-UserModule-d15d8cc4da7abb3ec6def1887f433de634ad8090c79ad1b59a6ef20952b70bfc378a848acba607c5ce228579d404bf1c34d0ce761f3305e7682c71977b37800b"' :
                                            'id="xs-controllers-links-module-UserModule-d15d8cc4da7abb3ec6def1887f433de634ad8090c79ad1b59a6ef20952b70bfc378a848acba607c5ce228579d404bf1c34d0ce761f3305e7682c71977b37800b"' }>
                                            <li class="link">
                                                <a href="controllers/UserController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UserController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-UserModule-d15d8cc4da7abb3ec6def1887f433de634ad8090c79ad1b59a6ef20952b70bfc378a848acba607c5ce228579d404bf1c34d0ce761f3305e7682c71977b37800b"' : 'data-bs-target="#xs-injectables-links-module-UserModule-d15d8cc4da7abb3ec6def1887f433de634ad8090c79ad1b59a6ef20952b70bfc378a848acba607c5ce228579d404bf1c34d0ce761f3305e7682c71977b37800b"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-UserModule-d15d8cc4da7abb3ec6def1887f433de634ad8090c79ad1b59a6ef20952b70bfc378a848acba607c5ce228579d404bf1c34d0ce761f3305e7682c71977b37800b"' :
                                        'id="xs-injectables-links-module-UserModule-d15d8cc4da7abb3ec6def1887f433de634ad8090c79ad1b59a6ef20952b70bfc378a848acba607c5ce228579d404bf1c34d0ce761f3305e7682c71977b37800b"' }>
                                        <li class="link">
                                            <a href="injectables/UserService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UserService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                </ul>
                </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#controllers-links"' :
                                'data-bs-target="#xs-controllers-links"' }>
                                <span class="icon ion-md-swap"></span>
                                <span>Controllers</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="controllers-links"' : 'id="xs-controllers-links"' }>
                                <li class="link">
                                    <a href="controllers/AuthController.html" data-type="entity-link" >AuthController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/IncomeController.html" data-type="entity-link" >IncomeController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/UserController.html" data-type="entity-link" >UserController</a>
                                </li>
                            </ul>
                        </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#entities-links"' :
                                'data-bs-target="#xs-entities-links"' }>
                                <span class="icon ion-ios-apps"></span>
                                <span>Entities</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="entities-links"' : 'id="xs-entities-links"' }>
                                <li class="link">
                                    <a href="entities/Income.html" data-type="entity-link" >Income</a>
                                </li>
                                <li class="link">
                                    <a href="entities/User.html" data-type="entity-link" >User</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#classes-links"' :
                            'data-bs-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/AddIncomeDto.html" data-type="entity-link" >AddIncomeDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/AddUserTable1776256601625.html" data-type="entity-link" >AddUserTable1776256601625</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateUserDto.html" data-type="entity-link" >CreateUserDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/IncomeDto.html" data-type="entity-link" >IncomeDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/Init1776241370693.html" data-type="entity-link" >Init1776241370693</a>
                            </li>
                            <li class="link">
                                <a href="classes/PaginationDto.html" data-type="entity-link" >PaginationDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/ResponseDto.html" data-type="entity-link" >ResponseDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateIncomeDto.html" data-type="entity-link" >UpdateIncomeDto</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#injectables-links"' :
                                'data-bs-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/AuthService.html" data-type="entity-link" >AuthService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/IncomeService.html" data-type="entity-link" >IncomeService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/UserService.html" data-type="entity-link" >UserService</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#miscellaneous-links"'
                            : 'data-bs-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/enumerations.html" data-type="entity-link">Enums</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/functions.html" data-type="entity-link">Functions</a>
                            </li>
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
                        Documentation generated using <a href="https://compodoc.app/" target="_blank" rel="noopener noreferrer">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});