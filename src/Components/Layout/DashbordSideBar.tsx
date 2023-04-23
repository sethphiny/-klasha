import React from "react";
import styled from "styled-components";
import UiIcon, { Icons } from "../UI/UiIcon";
import { Link, useLocation } from "react-router-dom";
import OutsideClickHandler from "react-outside-click-handler";

interface Route {
  iconName: Icons;
  path: string;
  name: string;
}

interface Props {
  toogleHumbuger: boolean;
  ClosetoogleHumbugerFunc: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function DashbordSideBar({
  toogleHumbuger,
  ClosetoogleHumbugerFunc,
}: Props) {
  const mainPages: Route[] = [
    {
      path: "/",
      name: "Dashboard",
      iconName: "DashBoardIcon",
    },
    {
      path: "/balances",
      name: "Balances",
      iconName: "BalanceIcon",
    },
    {
      path: "/transactions",
      name: "Transactions",
      iconName: "TransactionIcon",
    },
    {
      path: "/analytics",
      name: "Analytics",
      iconName: "AnalyticsIcon",
    },
    {
      path: "/marketing",
      name: "Marketing",
      iconName: "MarketingIcon",
    },
    {
      path: "/exchangerates",
      name: "Exchange rates",
      iconName: "ExchangeRatesIcon",
    },
  ];

  const Acceptpayments: Route[] = [
    {
      path: "/checkout",
      name: "Checkout",
      iconName: "CheckoutIcon",
    },
    {
      path: "/payment-links",
      name: "Payment Links",
      iconName: "PaymentLinksIcon",
    },
  ];

  const Sendpayments: Route[] = [
    {
      path: "/wire",
      name: "Wire",
      iconName: "WireIcon",
    },
  ];

  const appLocation = useLocation();

  function isRouteActive(route: string) {
    if (route === "/") return route === appLocation.pathname;
    return appLocation.pathname.includes(route);
  }

  const closeToogle = () => {
    ClosetoogleHumbugerFunc(false);
  };

  return (
    <Overlay toogleHumbuger={toogleHumbuger}>
      {toogleHumbuger && (
        <div className="mobile-X">
          <UiIcon icon="X" size={30} onClick={closeToogle} />
        </div>
      )}
      <OutsideClickHandler onOutsideClick={closeToogle}>
        <Sidebar toogleHumbuger={toogleHumbuger}>
          <LogoContainer>
            <UiIcon size={83.98} icon="Klasha" />
          </LogoContainer>
          <div className="sidebar_inner">
            <SubTitle>Main pages</SubTitle>
            {mainPages.map((route, index) => (
              <Link to={route.path} key={index} className="links">
                <Tab isActive={isRouteActive(route.path)}>
                  <UiIcon icon={route.iconName} />
                  <div className="tablist_text">{route.name}</div>
                </Tab>
              </Link>
            ))}
            <SubTitle>Accept payments</SubTitle>
            {Acceptpayments.map((route, index) => (
              <Link to={route.path} key={index} className="links">
                <Tab isActive={isRouteActive(route.path)}>
                  <UiIcon icon={route.iconName} />
                  <div className="tablist_text">{route.name}</div>
                </Tab>
              </Link>
            ))}
            <SubTitle>Send payments</SubTitle>
            {Sendpayments.map((route, index) => (
              <Link to={route.path} key={index} className="links">
                <Tab isActive={isRouteActive(route.path)}>
                  <UiIcon icon={route.iconName} />
                  <div className="tablist_text">{route.name}</div>
                </Tab>
              </Link>
            ))}
            <Support>
              <UiIcon icon="SupportIcon" size={20} />
              <span>Support</span>
            </Support>
            <HidePanel>
              <UiIcon icon="Arrowlefticon" size={20} />
              <span>Hide Panel</span>
            </HidePanel>
          </div>
        </Sidebar>
      </OutsideClickHandler>
    </Overlay>
  );
}

const Sidebar = styled.nav`
  background: var(--color-primary-250);
  position: static;
  bottom: 0;
  right: 0;
  left: 0;
  top: 0;
  width: 280px;
  transition: 0.5s;
  height: 100%;

  .sidebar_inner {
    display: flex;
    gap: 5px;
    justify-content: flex-start;
    flex-direction: column;
    position: relative;
    height: 100%;
    margin-left: 19.36%;
  }

  @media only screen and (max-width: 1200px) {
    ${({ toogleHumbuger }: { toogleHumbuger: boolean }) =>
      toogleHumbuger
        ? `
    background: var(--color-primary-250);
    position:fixed;
    bottom: 0;
    right: 0;
    left: 0;
    top: 0;
    width: 280px;
    transition: 0.5s;
    z-index: 2;
      `
        : `
    background: var(--color-primary-250);
    position: fixed;
    bottom: 0;
    right: 0;
    left: 0;
    top: 0;
    width: 280px;
    margin-left: -400px;
    transition: 0.5s;
    z-index: 2;
  `}
  }
`;

const Overlay = styled.div`
  @media only screen and (max-width: 1200px) {
    ${({ toogleHumbuger }: { toogleHumbuger: boolean }) =>
      toogleHumbuger
        ? `
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(5px);
  transition: 0.5s;
      `
        : `
    transition: 0.5s;
  `}
  }

  .mobile-X {
    position: absolute;
    z-index: 1;
    color: var(--color-primary-100);
    right: 0;
    top: 0;
    margin-right: 20px;
    margin-top: 80px;
    transition: 0.5s;
  }
`;

const LogoContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  margin-left: 19.36%;
`;

const SubTitle = styled.div`
  color: var(--color-primary-150);
  font-size: 16px;
  font-weight: 500;
  margin-bottom: 15px;
`;

const Tab = styled.div`
  display: flex;
  cursor: pointer;
  margin-bottom: 15px;

  &:hover {
    svg {
      stroke: var(--color-primary-200);
      fill: var(--color-primary-200);
    }

    .tablist_text {
      color: var(--color-primary-200);
      font-size: 16px;
      margin-left: 10px;
    }
  }

  svg {
    ${({ isActive }: { isActive: boolean }) =>
      isActive
        ? `stroke: var(--color-primary-200);
      fill: var(--color-primary-200);`
        : `stroke: var(--color-primary-100);
    fill: var(--color-primary-100);`}
  }

  .tablist_text {
    ${({ isActive }: { isActive: boolean }) =>
      isActive
        ? `color: var(--color-primary-200);
      font-size: 16px;
      margin-left: 10px;`
        : `color: var(--color-primary-100);
    font-size: 16px;
    margin-left: 10px;`}
  }
`;

const Support = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  padding: 5px;
  width: 100px;
  border-radius: 20px;
  text-align: center;
  background: var(--color-primary-200);
  color: var(--color-primary-300);
  cursor: pointer;

  span {
    display: block;
    font-size: 12px;
  }
`;

const HidePanel = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  padding: 5px;
  width: 100px;
  border: 1px solid var(--color-primary-50);
  border-radius: 10px;
  text-align: center;
  background: var(--color-primary-300);
  color: var(--color-primary-50);
  margin-top: 10px;
  cursor: pointer;

  svg {
    stroke: var(--color-primary-50);
    fill: var(--color-primary-50);
  }

  span {
    display: block;
    font-size: 12px;
  }
`;
