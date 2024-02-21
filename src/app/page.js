import Services from "@/components/services/services";

export const metadata = {
  title: "Home | Lisotrip",
  description: "Welcome to the homepage of lisotrip"
}
const HomePage = () => { 
  return (
    <div className="">
      <Services />
    </div>
  );
}
export default HomePage;