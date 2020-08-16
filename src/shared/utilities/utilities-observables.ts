import { OnDestroy } from '@angular/core';
import { ReplaySubject } from 'rxjs';

export function componentDestroyed(component: OnDestroy): ReplaySubject<void> {
  const ngOnDestroyComponentRef = component.ngOnDestroy;
  const destroyedSubject = new ReplaySubject<void>(1);
  component.ngOnDestroy = () => {
    ngOnDestroyComponentRef.apply(component);
    destroyedSubject.next(undefined);
    destroyedSubject.complete();
  };
  return destroyedSubject;
}
