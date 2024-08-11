# LangChat

LangChat is a web application designed to help users learn new languages through interactive conversations with an AI-powered language buddy. The app not only aids in language acquisition but also provides cultural insights and personalized lessons tailored to the user’s proficiency level and learning goals.

## Features

- AI-Powered Conversations: Engage in real-time conversations with an AI to improve your language skills.
- Cultural Insights: Learn about cultural nuances and practices as part of your language learning journey.
- Personalized Lessons: Receive tailored lessons and feedback based on your language proficiency and progress.

## Demo

Check out the live version of LangChat [here](https://langchat-theta.vercel.app/).

## Getting Started

To run the project on your local machine, follow these steps:

### Prerequisites

- Node.js and npm installed on your machine.
- Firebase account and a project set up to get your `NEXT_PUBLIC_FIREBASE_API_KEY`.
- OpenAI account to get your `NEXT_PUBLIC_OPENAI_API_KEY`.

## Technologies Used

Pantry Tracker is built using modern web technologies:

- **Next.js**: A React framework for building server-side rendered and statically generated web applications.
- **Firebase**: A comprehensive app development platform that provides backend services like authentication and real-time database.
- **Material-UI (MUI)**: A popular React UI framework that implements Google's Material Design.
- **OpenAI API**: Utilized for generating AI-powered recipe suggestions based on pantry items.

### Installation

1. Clone the repository:

   ```sh
   git clone https://github.com/Mago223/langchat.git
   cd langchat

   ```

2. Install the dependencies:

```sh
npm install

```

3. Create a .env file and add your environment variables:

```sh
OPENAI_API_KEY=your_openai_api_key
NEXT_PUBLIC_FIREBASE_API_KEY=your_firebase_api_key
NEXT_PUBLIC_AUTH_DOMAIN=your_auth_domain
NEXT_PUBLIC_PROJECT_ID=your_project_id
NEXT_PUBLIC_STORAGE_BUCKET=your_storage_bucket
NEXT_PUBLIC_MESSAGING_SENDER_ID=your_messaging_sender_id
NEXT_PUBLIC_APP_ID=your_app_id
NEXT_PUBLIC_MEASUREMENT_ID=your_measurement_id
```

4. Run the development server:

```sh
npm run dev

```

5. Open your browser and navigate to http://localhost:3000 to see the application running.
