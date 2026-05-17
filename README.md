# Dental Care App

**Language:** English | [Українська](README.ua.md)

## 1. Project Overview

Dental Care App is a **React Native CLI** mobile application created as an MVP for a dental clinic. It helps patients move through the main care journey in one place: onboarding, authentication, service selection, doctor booking, appointment history, and post-treatment medication tracking.

The goal of the project is to make dental care easier to manage for patients and more structured for the clinic. Users can browse doctors, choose dental services, book appointments, review previous visits, and follow a prescribed medication plan after treatment.

The product can later be expanded with a CRM web version for clinic staff, where administrators and doctors would manage schedules, appointments, patients, treatment plans, and clinic performance statistics.

---

## 2. Analysis of the Existing Application

The application already has a complete mobile flow with authentication, navigation, a home dashboard, appointment booking, a user profile, visit history, and a medication tracking section.

### Key Features

- **Onboarding** - introductory screens that present the purpose of the application.
- **Authentication and Registration** - login, registration, and OTP confirmation.
- **Home Screen** - visit statistics, upcoming appointment, quick actions, banners, and a trust block.
- **Appointment Booking** - service, doctor, date, time, and booking confirmation flow.
- **Doctor Profile** - doctor information, rating, education, reviews, and a booking action.
- **Visit History** - past and upcoming appointments with access to visit details.
- **Medications** - treatment plan overview, daily medication schedule, and progress tracking.
- **User Profile** - personal account information and account actions.

### Main User Scenarios

1. The user opens the application, completes onboarding, and signs in.
2. The user checks the home screen for visit statistics, upcoming appointments, and quick actions.
3. The user starts the booking flow, selects a service, chooses a doctor, and picks a date and time.
4. After confirmation, the appointment is saved and displayed in visit history.
5. If a treatment plan exists, the user can track medications and mark doses as taken.

### Areas for Functional Expansion

- **Navigation improvement** - make quick actions lead directly to core flows such as booking, chat support, and visit history.
- **Support and FAQ section** - expand the chat tab into a practical help area for common patient questions.
- **Clinic-side CRM** - add a future web interface for managing doctors, schedules, patients, appointments, and analytics.

---

## 3. Functionality Expansion

### Added Functionality: Medications

The **Medications** section was added to help patients follow a treatment plan after a dental procedure.

The feature includes:

- treatment period;
- current treatment day;
- overall treatment progress;
- list of medicines scheduled for today;
- dosage and intake time;
- ability to mark a medicine as taken;
- full treatment plan overview.

This improves the user experience because the application supports not only appointment booking but also the post-visit recovery process.

### Quick Actions Navigation

The home screen includes quick action cards for the main user tasks:

- **Book Appointment** - entry point to appointment booking;
- **Find Doctor** - entry point to doctor selection;
- **Chat Support** - entry point to help and support;
- **View Records** - entry point to visit history.

These actions make the home dashboard more practical and reduce the number of steps needed to reach important sections.

---

## 4. State Management

The application uses different state management approaches depending on the type of data.

### Context API

**Context API** is used for global application state:

- `AuthContext` - authentication state, user profile, login/logout, and OTP registration flow;
- `ThemeContext` - current theme state and theme switching.

Context API is suitable here because these values are shared across the application but do not require a complex Redux architecture.

### React Query

**TanStack React Query** is used for server-side data:

- doctors;
- appointments;
- available slots;
- visit history;
- treatment plans;
- medication intake.

React Query is a good fit for this project because it handles caching, loading states, errors, and server data updates without adding unnecessary global client-state complexity.

---

## 5. Component-Based Approach

The project follows a component-based structure. Reusable interface elements are separated into individual files or folders, which makes the code easier to maintain and extend.

### Component Examples

- `AppointmentCard` - displays the upcoming appointment.
- `EmptyAppointmentCard` - displays the empty state when there are no upcoming appointments.
- `MedicationReminder` - shows a short medication summary on the home screen.
- `MedicationItem` - renders a medication schedule item.
- `DoctorCard` - displays doctor information in the booking flow.
- `ServiceCard` - displays a dental service option.
- `QuickActionCard` - renders a shortcut action on the home screen.
- `CustomBtn` - reusable button with different visual states.
- `TrustBlock` - displays trust and security information.

---

## 6. UX/UI Improvements

The application improves the user experience through:

- clear bottom tab navigation;
- smooth animated header behavior on the home screen;
- reusable cards for appointments, doctors, services, and medications;
- consistent color palette, spacing, shadows, and rounded elements;
- loading, empty, and content states for data-driven screens;
- typed parameter passing between screens, for example:
  - `DoctorList` -> `DoctorProfile`;
  - `DoctorProfile` -> `SelectDate`;
  - `SelectDate` -> `BookingConfirm`;
  - `VisitHistory` -> `VisitDetails`.

---

## 7. Project Structure

```txt
src/
  api/                 # Firebase API and data requests
  assets/              # icons, images, screenshots
  components/          # large reusable components
  constants/           # routes, theme, collections, static data
  context/             # AuthContext, ThemeContext
  hook/                # custom hooks
  interfaces/          # TypeScript types
  layout/              # shared layout components
  mockData/            # local test data
  navigation/          # Root, Tab, and Stack navigation
  screens/             # application screens
  ui/                  # small UI components
  utils/               # helper functions
```

---

## 8. Screenshots

### Onboarding and Authentication

| Onboarding 1                                                   | Onboarding 2                                                   | Login                                             |
| -------------------------------------------------------------- | -------------------------------------------------------------- | ------------------------------------------------- |
| ![Onboarding 1](src/assets/screenshots/onboarding_screen1.png) | ![Onboarding 2](src/assets/screenshots/onboarding_screen2.png) | ![Login](src/assets/screenshots/login_screen.png) |

| Register                                                | OTP                                          |
| ------------------------------------------------------- | -------------------------------------------- |
| ![Register](src/assets/screenshots/register_screen.png) | ![OTP](src/assets/screenshots/otp_sreen.png) |

### Main Screens

| Home                                                 | Home Empty                                                  | Profile                                               |
| ---------------------------------------------------- | ----------------------------------------------------------- | ----------------------------------------------------- |
| ![Home](src/assets/screenshots/home_full_screen.png) | ![Home Empty](src/assets/screenshots/home_empty_screen.png) | ![Profile](src/assets/screenshots/profile_screen.png) |

### Doctor Appointment Booking

| Services                                               | Doctors                                                   | Doctor Profile                                                     |
| ------------------------------------------------------ | --------------------------------------------------------- | ------------------------------------------------------------------ |
| ![Services](src/assets/screenshots/service_screen.png) | ![Doctors](src/assets/screenshots/doctor_list_screen.png) | ![Doctor Profile](src/assets/screenshots/doctor_profile_sceen.png) |

| Select Date                                                   | Confirm Booking                                                      |
| ------------------------------------------------------------- | -------------------------------------------------------------------- |
| ![Select Date](src/assets/screenshots/select_date_screen.png) | ![Confirm Booking](src/assets/screenshots/confim_booking_screen.png) |

### History and Treatment

| Visit History                                                     | Visit Details                                                    | Medications                                                  |
| ----------------------------------------------------------------- | ---------------------------------------------------------------- | ------------------------------------------------------------ |
| ![Visit History](src/assets/screenshots/visit_history_screen.png) | ![Visit Details](src/assets/screenshots/detail_visit_screen.png) | ![Medications](src/assets/screenshots/medication_screen.png) |

---

## 9. Presentation Overview

- **Slide 1: Main Idea** - Dental Care App organizes the patient journey from choosing a doctor to tracking treatment after a visit.
- **Slide 2: Key Features** - authentication, doctor browsing, appointment booking, date and time selection, visit history, user profile, and medication reminders.
- **Slide 3: New Functionality** - the Medications section helps users follow a treatment plan, view progress, and mark medicines as taken.
- **Slide 4: Structure and Usability** - the modular structure separates screens, components, hooks, API logic, contexts, and utilities, making the project easier to maintain and extend.

---

## 10. Future Functionality

The application can be expanded with features that improve the experience for both patients and the dental clinic:

- **Push notifications** - reminders for medication intake and upcoming doctor appointments.
- **FAQ / Chat Support** - a help section with answers to common patient questions before and after a visit.
- **AI time recommendations** - suggested appointment slots based on doctor workload, procedure duration, and patient context.
- **CRM web version** - a clinic-side dashboard for managing patients, doctors, schedules, appointments, and statistics.
- **Treatment analytics** - tracking how consistently patients follow medication plans and post-treatment recommendations.

---

## 11. Conclusion

Dental Care App was expanded with medication tracking, structured documentation, reusable components, clear state management, and a consistent UI approach. The project now better represents a real patient-facing dental care application and has a clear direction for future growth.
