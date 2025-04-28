// import { PrismaClient } from "@prisma/client";

// const prismaClientSingleton = () => {
//   return new PrismaClient();
// };

// declare const globalThis: {
//   prismaGlobal: ReturnType<typeof prismaClientSingleton>;
// } & typeof global;

// export const prisma = globalThis.prismaGlobal ?? prismaClientSingleton();

// globalThis.prismaGlobal = prisma;


// // Helper function to handle connection errors with retries
// export async function withRetry<T>(
//   fn: () => Promise<T>,
//   retries = 3,
//   delay = 500
// ): Promise<T> {
//   try {
//     return await fn()
//   } catch (error: any) {
//     // Enhanced error detection
//     const isConnectionError = 
//       error.code === 'P1001' || // Error connecting to database
//       error.code === 'P1002' || // Database connection timed out
//       error.code === 'P1017' || // Server has closed the connection
//       error.code === 'P1A01' || // Connection lost
//       error.code === 'P2010' || // Raw query failed
//       error.code === 'P2023' || // Inconsistent column data
//       // MongoDB specific error codes
//       error.code === 121 || // Document validation failure
//       (error.message && error.message.includes('connection'))

//     if (retries <= 0 || !isConnectionError) {
//       throw error
//     }

//     console.warn(`Database connection error (${error.code}): ${error.message}`)
//     console.warn(`Retrying... (${retries} attempts left)`)
    
//     // Wait before retrying
//     await new Promise(resolve => setTimeout(resolve, delay))
    
//     // Retry with one less retry attempt and increased delay
//     return withRetry(fn, retries - 1, delay * 1.5)
//   }
// }

// // Function to check database connection
// export async function checkDatabaseConnection() {
//   try {
//     // For MongoDB, use a collection access to test the connection
//     // This is safer than raw queries which might not work the same in MongoDB
//     await prisma.$connect()
//     return { connected: true, error: null }
//   } catch (error: any) {
//     console.error('Database connection check failed:', error)
//     return { 
//       connected: false, 
//       error: error.message || 'Unknown connection error'
//     }
//   } finally {
//     // No need to disconnect as we're using the global instance
//   }
// }
import { PrismaClient } from "@prisma/client";

const prismaClientSingleton = () => {
  return new PrismaClient();
};

declare const globalThis: {
  prismaGlobal: ReturnType<typeof prismaClientSingleton>;
} & typeof global;

const prisma = globalThis.prismaGlobal ?? prismaClientSingleton();

export default prisma;

globalThis.prismaGlobal = prisma;