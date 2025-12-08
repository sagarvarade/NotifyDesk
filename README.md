# NotifyDesk

NotifyDesk is a comprehensive microservices-based notification and management system. It is built with Spring Boot for the backend services and React/Vite for the frontend user interface.

## Architecture

The project consists of the following microservices:

-   **naming-service**: Eureka Server for service discovery and registration.
-   **authentication-service**: Handles user authentication, registration, and JWT token generation.
-   **audit-service**: Tracks and logs system events and auditing information.
-   **email-service**: Responsible for sending email notifications.
-   **sms-service**: Handles SMS notifications.
-   **notifydesk-ui**: The frontend application built with React, Vite, and TypeScript.
-   **notifydesk-app**: (Description tbd - likely aggregation or app logic)
-   **common**: Shared libraries and utilities used across microservices.

## Prerequisites

Ensure you have the following installed:

-   **Java 25**: Required for backend services.
-   **Maven**: For building and managing Java dependencies.
-   **Node.js**: Required for the frontend (`notifydesk-ui`).

## Getting Started

### Backend Setup

1.  **Build the Project**:
    Navigate to the root directory and run:
    ```bash
    mvn clean install
    ```

2.  **Run Services**:
    Start the services in the following order (recommended):
    1.  `naming-service` (Eureka Server)
    2.  `authentication-service`
    3.  Other services (`audit-service`, `email-service`, `sms-service`)

### Frontend Setup

1.  Navigate to the `notifydesk-ui` directory:
    ```bash
    cd notifydesk-ui
    ```

2.  Install dependencies:
    ```bash
    npm install
    ```

3.  Start the development server:
    ```bash
    npm run dev
    ```

## Technologies

-   **Backend**: Spring Boot 4.0.0, Spring Cloud 2025.1.0, Spring Security 7.0
-   **Frontend**: React, Vite, TypeScript
-   **Database**: MySQL (configured in services)

