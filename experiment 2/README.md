Experiment 2

Aim
To design and implement user interface components using Material UI and integrate them into a React application by reusing and extending components from Experiment 

Experiment Description
In this experiment, a React-based Single Page Application was developed using Material UI (MUI) as the component library.
The objective was to create standard UI components, reuse existing components from Experiment 1, and enhance them by adding additional Material UI elements.
Navigation between pages such as Home, About, and Contact was implemented using React Router, enabling smooth page transitions without reloading the browser.

UI Components Created
The following 5 UI components were created using Material UI:
Button – Used for user actions such as submit
TextField – Used for taking user input
Select – Dropdown component for selection
Rating – Star rating component
Checkbox – Used for selection and confirmation

Components Reused from Experiment 1
The following 3 components were copied from Experiment 1 and reused:
Home
About
Contact
These components were further enhanced by adding more Material UI elements.

Extra UI Components Added (Enhancements)
Avatar – To display user/profile icon
Card & CardContent – To organize and present content
Typography – For consistent and readable text styling
Stack – For layout alignment and spacing
FormControlLabel – To associate labels with checkboxes

Project Structure
exp-2
 ├─ src
 │  ├─ components
 │  │  ├─ Home.jsx
 │  │  ├─ About.jsx
 │  │  ├─ Contact.jsx
 │  │  ├─ Button.jsx
 │  │  ├─ TextField.jsx
 │  │  ├─ Select.jsx
 │  │  ├─ Ratings.jsx
 │  │  ├─ Checkbox.jsx
 │  │  └─ Spa.jsx
 │  ├─ App.jsx
 │  └─ main.jsx

Learning Outcomes
Learned to design UI using Material UI
Understood how to reuse and enhance components
Gained experience in React component-based development
Implemented routing using React Router
Improved understanding of UI layout and styling

Conclusion
This experiment successfully demonstrates the use of Material UI to design and enhance user interface components.
By reusing components from Experiment 1 and extending them with additional UI elements, a structured and interactive Single Page Application was developed.


# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
