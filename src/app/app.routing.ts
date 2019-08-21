import { RouterModule, Routes } from '@angular/router';
import { MetaGuard } from '@ngx-meta/core';

const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    {
        path: '',
        canActivateChild: [MetaGuard],
        children: [{ path: 'dashboard', loadChildren: './dashboard/dashboard.module#DashboardModule' }],
    },
    {
        path: '',
        canActivateChild: [MetaGuard],
        children: [{ path: '**', loadChildren: './not-found/not-found.module#NotFoundModule' }],
    },
];
// must use {initialNavigation: 'enabled'}) - for one load page, without reload
export const AppRoutes = RouterModule.forRoot(routes, { initialNavigation: 'enabled' });
