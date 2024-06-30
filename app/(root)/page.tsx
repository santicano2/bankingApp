import React from "react";

import { getLoggedInUser } from "@/lib/actions/user.actions";

import HeaderBox from "@/components/HeaderBox";
import TotalBalanceBox from "@/components/TotalBalanceBox";
import RightSidebar from "@/components/RightSidebar";

const Home = async () => {
  const loggedIn = await getLoggedInUser();

  return (
    <section className="home">
      <div className="home-content">
        <header className="home-header">
          <HeaderBox
            type="greeting"
            title="Bienvenido"
            user={loggedIn?.name || "Invitado"}
            subtext="Ingresa y maneja tu cuenta bancaria"
          />

          <TotalBalanceBox
            accounts={[]}
            totalBanks={1}
            totalCurrentBalance={1250.35}
          />
        </header>
        TRANSACCIONES RECIENTES
      </div>

      <RightSidebar
        user={loggedIn}
        transactions={[]}
        banks={[{ currentBalance: 123.5 }, { currentBalance: 500 }]}
      />
    </section>
  );
};

export default Home;
