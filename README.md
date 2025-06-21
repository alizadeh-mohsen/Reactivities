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
1. Json to Typescript = > type.d.ts
5. React Dev tools extension for browser
6. Fragment <></>
1. Semantic UI is deprecated => Material UI :
	1. Typography
	1. List, ListItem , ListItemText
1. 
1. fetch('').then(response=>response.json()).then(data=>set(data));
7. Axios: npm install axios => simple promise based HTTP client, intercept, transform request and response, auto convert to json,..
8. Axios.get<x[]>('').then(response=>response.data)
9.  const { data: activities, isPending } = useQuery({
    queryKey: ['activities'],
    queryFn: async () => {
      const response = await axios.get<Activity[]>('https://localhost:5001/api/activities')
      return response.data
    }
  })
10. ReactQueryDevTools 
11. Custom Hook, UseActivities


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
1.Component A => UseEffect => Entities => Global State 
1. Component A => UseEQuery => Entities => QueryCache => UseMutation: Set cache/Inavlidate cache, Optimistic updates
1. Data fetching and state management, caching, background fetching, synchronization, and more
1. Configure React Query - Tanstack Query, TanStack Devtools
2. QueryClientProvider, QueryClient, QueryClientConfig
1. React Query Dev Tools
3. Custom hooks : UseQuery, UseMutation, UseQueryClient
4. Using Axios interceptors
5. .env.development congigs
6. Hook up all the requests to the API

# Routing
1. ReactRouter 
2. createBrowserRouter, Outlet, component={NavLink},  Link, to, 
1. ReactRouter hooks : useNavigate, UseParams, useLocation, useSearchParams

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
1. Custom FromControls:
	1. TextInput
	1. SelectInput, 
	1. DateInput:: MUI X Date and Time picker :Date time picker, 
	1. AutoCompleteInput: location IQ, google Places API(New)
debounce
4. React Leaflet to  display Map

# Identiy
1. Microsoft AspNetCore Identity EntityFrameworkCore












Cloudinary
Hub
