import { Routes} from '@angular/router';

export function getSimpleRoute(component: any): Routes {
  return [
    {
      path: '',
      component
    }
  ];
}
