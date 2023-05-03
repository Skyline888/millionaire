import React, { FC }  from 'react'
import Layout from 'components/layout';
import { LayoutType } from 'utils/types';
import { ROUTES } from 'utils/routes';

const Main: FC = () => {

  return (
    <Layout type={LayoutType.MAIN} buttonText="Start" goTo={ROUTES.question} />
  )
}

export default Main
