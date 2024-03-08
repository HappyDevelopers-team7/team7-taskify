import { lazy } from 'react';
import { createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom';

const LandingPage = lazy(() => import('@/pages/landing'));
const SignInPage = lazy(() => import('@/pages/sign-in'));
const SignUpPage = lazy(() => import('@/pages/sign-up'));
const DashBoardPage = lazy(() => import('@/pages/dashboard'));
const NotFoundPage = lazy(() => import('@/pages/not-found'));

const PrimaryRoute = (
  <Route path='/'>
    <Route index element={<LandingPage />} />
    <Route path='sign-in' element={<SignInPage />} />
    <Route path='sign-up' element={<SignUpPage />} />
    <Route path='dashboard' element={<DashBoardPage />} />
    <Route path='*' element={<NotFoundPage />} />
  </Route>
);

const baseRoute = createRoutesFromElements(PrimaryRoute);

export const router = createBrowserRouter(baseRoute);
