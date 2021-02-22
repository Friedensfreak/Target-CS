import React from 'react';

export const BusTransit = React.lazy(() => {
  return import("App/BusTransit");
});

export const TrainTransit = React.lazy(() => {
  return import("App/TrainTransit");
});