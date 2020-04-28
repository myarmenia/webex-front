import { createSelector } from "reselect";

export const activationsSelector = (state) => state.currentUser.activations;
export const activationsLoadedSelector = (state) =>
  state.currentUser.activations_loaded;

export const currentActivationSelector = createSelector(
  activationsSelector,
  activationsLoadedSelector,
  (activations, loaded) => {
    const currentActivation =
      activations.filter((activation) => !activation.is_expired).reverse()[0] ||
      null;

    if (loaded && !currentActivation) return false;

    return currentActivation;
  }
);

export const lastActivationSelector = createSelector(
  activationsSelector,
  (activations) => [...activations].reverse()[0]
);
