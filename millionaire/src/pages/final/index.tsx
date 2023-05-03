import React, { FC, useMemo } from "react";
import { useLocation } from "react-router-dom";

import { Layout } from "components/layout";
import { LayoutType } from "utils/types";
import { ROUTES } from "utils/routes";

import prices from "../../utils/questions_price.json";

export const Final: FC = () => {
  const location = useLocation();
  const totalEarned = useMemo(
    () => prices.find((price) => price.id === location.state)?.value as number,
    [location.state],
  );
  return (
    <Layout
      buttonText="Try again"
      goTo={ROUTES.main}
      money={totalEarned}
      type={LayoutType.FINAL}
    />
  );
};
