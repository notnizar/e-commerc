// lib/routes.ts
// This file centralizes route definitions for the application

/**
 * Application routes configuration
 * 
 * This can be imported throughout the application to maintain
 * consistent routing and avoid hardcoded paths
 */

const ROUTES = {
  // Authentication routes
    Public: {
        login: '/auth/login',
        register: '/auth/register',
        resetPassword: '/auth/reset-password',
    },
    Protected: {
      HOME: '/',
      dashboard:'/dashboard',
      shop: '/shop'
    }

}as const

export type RoutePath = (typeof ROUTES)[keyof typeof ROUTES];

// Helper to determine if a route requires authentication
export const isProtectedRoute = (path: string): boolean => {
    return [
        ROUTES.Protected.dashboard,
    ].some(route => path === route || path.startsWith(`${route}/`));
  };
  
  // Helper to determine if a route is an auth route (login/signup pages)
  export const isAuthRoute = (path: string): boolean => {
    return [
        ROUTES.Public.login,
        ROUTES.Public.register,
        ROUTES.Public.resetPassword,
    ].some(route => path === route || path.startsWith(`${route}/`));
  };
  
  export default ROUTES;