import React, { FC } from "react";

import { Layout } from "components/layout";
import { LayoutType } from "utils/types";
import { ROUTES } from "utils/routes";

export const Main: FC = () => (
  <Layout buttonText="Start" goTo={ROUTES.question} type={LayoutType.MAIN} />
);
