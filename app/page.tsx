import WalletButton from "./walletButton";

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Flex container to center the content vertically and horizontally */}
      <div className="flex flex-col items-center justify-center h-screen">
        {/* Heading */}
        <p className="text-white font-bold text-3xl"> Viem.sh </p>

        {/* Card container */}
        <div className="h-[300px] min-w-[150px] flex flex-col justify-between backdrop-blur-2xl bg-[#290333]/30 rounded-lg mx-auto p-7 text-white border border-purple-950">
          {/* Render the WalletButton component */}
          <WalletButton />
        </div>
      </div>
    </main>
  );
}