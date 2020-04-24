import { createSelector } from "reselect";

export const activationsSelector = (state) => state.currentUser.activations;

export const currentActivationSelector = createSelector(
  activationsSelector,
  (activations) => {
    const currentActivation =
      activations.filter((activation) => !activation.is_expired).reverse()[0] ||
      null;

    if (!currentActivation && activations.length) return false;

    return currentActivation;
  }
);

export const lastActivationSelector = createSelector(
  activationsSelector,
  (activations) => [...activations].reverse()[0]
);
