# Backend Skeleton
1. Clean Architecture: API, Application, Domain, Persistence
2. EntityFramework and DbContext
3. Seeding Data
4. Code first migrations
5. Postman
6. Git

# Client Skeleton
1. Creating the project files
2. Vite build tool: 
	2.1. npm create vite@latest
	2.2. cd client
	2.3. npm install
	2.4. npm run dev
3. vite.config.ts = > sever: port: 3000. open: true
4. React Webhooks: UseState, UseEffect, UseRef, UseMemo, UseCallback
5. Json to Typescript = > type.d.ts
6. React Dev tools extension for browser
7. Fragment <></>
8. Semantic UI is deprecated => Material UI :
	8.1. Typography
	8.2. List, ListItem , ListItemText
9. fetch('').then(response=>response.json()).then(data=>set(data));
10. Axios: npm install axios => simple promise based HTTP client, intercept, transform request and response, auto convert to json,..
11. Axios.get<x[]>('').then(response=>response.data)
12. const { data: activities, isPending } = useQuery({
    queryKey: ['activities'],
    queryFn: async () => {
      const response = await axios.get<Activity[]>('https://localhost:5001/api/activities')
      return response.data
    }
  })
13. ReactQueryDevTools 
14. Custom Hook, UseActivities


# Creating CRUD APIs using CQRS and Mediator in .Net
1. Clean Architecture pattern 
2. CQRS + Mediator pattern : Command Modifies state, Query returns data
3. AutoMapper

# Creating CRUD on Client side
1.  Materail UI componenst Grid2, Box, Card, Paper, Typography, TextFiled
2. sx, CssBaseline
3. Forms, defaultValue, onChange, value, name, type, placeholder
4. Basic Crud

# React Query
1. Component A => UseEffect => Entities => Global State 
2. Component A => UseEQuery => Entities => QueryCache => UseMutation: Set cache/Inavlidate cache, Optimistic updates
3. Data fetching and state management, caching, background fetching, synchronization, and more
4. Configure React Query - Tanstack Query, TanStack Devtools
5. QueryClientProvider, t, QueryClientConfig
6. React Query Dev Tools
7. Custom hooks : UseQuery, UseMutation, UseQueryClient
8. Using Axios interceptors
9. .env.development congigs
10. Hook up all the requests to the API

# Routing
1. ReactRouter 
2. createBrowserRouter, Outlet, component={NavLink},  Link, to, 
3. ReactRouter hooks : useNavigate, UseParams, useLocation, useSearchParams

# Styling the user interface
1. Avatar, react-calendar, UseLocation, date-fns

# MobX
1. Observables, MakeAutoObservable
2. Actions, Set value
3. Computed properties, Get value
4. Reactions, On value change
5. AutoRun,
6. Stores, Global state, useContext
7. Observers,mobx react lite

# Error Handling
1. FluentValidation
2. Validation Middleware, using Mediator middleware
3. react-toastify

# Forms
1. React Hook Form: useForm, useWatch, register, reset, handleSubmit
2. Client Side Validation with Zod,
3. Zod ValidationSchema, 
4. Custom FromControls:
	4.1. TextInput
	4.2. SelectInput, 
	4.3. DateInput:: MUI X Date and Time picker :Date time picker, 
	4.4. AutoCompleteInput: location IQ, google Places API(New)
5. Debounce
6. React Leaflet to  display Map

# Identity backend
1. Microsoft AspNetCore Identity EntityFrameworkCore
2. cookies, JWT, Refresh tokens
3. IhttpContextAccessor to get userId
4. IAuthorizationRequirement, AuthorizationHandler
5. Policy-based authorization 

# Identity frontend
1. client login/registert
2. private routes

# Database Migration
Migrated database from Microsoft SQL Server to PostgreSQL










Cloudinary
Hub
