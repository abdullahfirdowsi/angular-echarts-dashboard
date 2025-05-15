// filepath: c:\Data\Works\DEX\Angular\angular-echarts-dashboard\src\environments\environment.ts
export const environment = {
  production: false,
  apiUrl: 'https://interns-api-ovvy.onrender.com/api',
  apiConfig: {
    timeout: 30000,  // 30 seconds
    retries: 3,
    retryDelay: 1000,  // 1 second, will be multiplied by retry count
    errorMessages: {
      default: 'An unexpected error occurred. Please try again.',
      networkError: 'Unable to connect to the server. Please check your internet connection.',
      notFound: 'The requested resource was not found.',
      timeout: 'The request timed out. Please try again.',
      serverError: 'The server encountered an error. Please try again later.'
    }
  }
};
