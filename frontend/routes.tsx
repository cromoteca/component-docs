import { capitalCase, paramCase } from 'change-case';
import MainLayout from 'Frontend/views/MainLayout.js';
import * as React from 'react';
import { createBrowserRouter, IndexRouteObject, NonIndexRouteObject, useMatches } from 'react-router-dom';
import AppLayoutSimple from './views/app-layout/AppLayoutSimple.js';
import ButtonSimple from './views/button/ButtonSimple.js';
import Root from './views/root/Root.js';

export type MenuProps = Readonly<{
  icon?: string;
  title?: string;
}>;

export type ViewMeta = Readonly<{ handle?: MenuProps }>;

type Override<T, E> = Omit<T, keyof E> & E;

export type IndexViewRouteObject = Override<IndexRouteObject, ViewMeta>;
export type NonIndexViewRouteObject = Override<
  Override<NonIndexRouteObject, ViewMeta>,
  {
    children?: ViewRouteObject[];
  }
>;
export type ViewRouteObject = IndexViewRouteObject | NonIndexViewRouteObject;

type RouteMatch = ReturnType<typeof useMatches> extends (infer T)[] ? T : never;

export type ViewRouteMatch = Readonly<Override<RouteMatch, ViewMeta>>;

export const useViewMatches = useMatches as () => readonly ViewRouteMatch[];

export const routes: readonly ViewRouteObject[] = [
  {
    element: <MainLayout />,
    handle: { icon: 'null', title: 'Main' },
    children: [Root, AppLayoutSimple, ButtonSimple].map(element => ({
      path: element.name === 'Root' ? '/' : paramCase(element.name),
      element: React.createElement(element, {}),
      handle: { icon: 'file', title: capitalCase(element.name) },
    })),
  },
];

const router = createBrowserRouter([...routes]);
export default router;
