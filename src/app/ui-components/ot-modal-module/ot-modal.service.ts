
import {
    Injectable,
    Injector,
    ComponentFactoryResolver,
    EmbeddedViewRef,
    ApplicationRef,
    ComponentRef
} from '@angular/core';
@Injectable({
    providedIn: 'root',
})
export class OtModalService {
    rootViewContainer: HTMLElement;
    modalComponentRef: ComponentRef<any>;
    constructor(private factoryResolver: ComponentFactoryResolver,
        private appRef: ApplicationRef,
        private injector: Injector) {
        this.factoryResolver = factoryResolver
    }
    setRootViewContainerRef(viewContainerRef) {
        this.rootViewContainer = viewContainerRef;
    }
    addModalComponent(component: any, config?: object) {
        const componentRef = this.factoryResolver
            .resolveComponentFactory(component)
            .create(this.injector); // create dynamic component
        componentRef.instance['config'] = config;//To set the config on the instance
        this.appRef.attachView(componentRef.hostView); // To make this component detect changes explicitly as we are not using view container ref
        const elementToAppend = (componentRef.hostView as EmbeddedViewRef<any>)
            .rootNodes[0] as HTMLElement;
        this.rootViewContainer.appendChild(elementToAppend); // go and fall in modal container
        this.modalComponentRef = componentRef; // storing modal reference for destroying.
    }
    removeModalComponent() {
        this.modalComponentRef.destroy();
        this.appRef.detachView(this.modalComponentRef.hostView);
    }
}