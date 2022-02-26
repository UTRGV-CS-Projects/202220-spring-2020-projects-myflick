import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider } from "react-native-safe-area-context";
import Amplify from "aws-amplify";
import awsconfig from "./src/aws-exports";
import useCachedResources from "./hooks/useCachedResources";
import useColorScheme from "./hooks/useColorScheme";
import Navigation from "./navigation";
import { AuthContextProvider } from "./context/AuthContext";

export default function App() {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();
  Amplify.configure(awsconfig);

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <SafeAreaProvider>
        <AuthContextProvider>
          <StatusBar />
          <Navigation colorScheme={colorScheme} />
        </AuthContextProvider>
      </SafeAreaProvider>
    );
  }
}
