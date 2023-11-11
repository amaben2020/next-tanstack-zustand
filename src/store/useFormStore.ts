import { mountStoreDevtool } from "simple-zustand-devtools";
import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";
// set is a function that returns an object

type TStep1 = { email: string; name: string; password: string };
type TStep2 = { token: number; isOutside: boolean; address: string };
type TStep3 = { company: string; zip: string; country: string };

type TFormData = { firstStep: TStep1 } & { secondStep: TStep2 } & {
  thirdStep: TStep3;
};

const useFormDataStore = create<TFormData>()(
  devtools(
    persist(
      (set) => ({
        firstStep: {
          email: "",
          name: "",
          password: "",
        },
        secondStep: {
          token: 0,
          isOutside: false,
          address: "",
        },
        thirdStep: {
          company: "",
          zip: "",
          country: "",
        },
        updateFirstStep: (firstStep: {
          email: string;
          name: string;
          password: string;
        }) =>
          set((state: TFormData) => ({
            firstStep: {
              ...state.firstStep,
              firstStep,
            },
          })),
        updateSecondStep: (secondStep: {
          token: number;
          isOutside: boolean;
          address: string;
        }) =>
          set((state: TFormData) => ({
            secondStep: {
              ...state.secondStep,
              secondStep,
            },
          })),
        updateThirdStep: (thirdStep: {
          company: string;
          zip: string;
          country: string;
        }) =>
          set((state: TFormData) => ({
            thirdStep: {
              ...state.thirdStep,
              thirdStep,
            },
          })),
      }),

      { name: "useFormDataStore" },
    ),
  ),
);

export default useFormDataStore;

if (process.env.NODE_ENV === "development") {
  mountStoreDevtool("useFormDataStore", useFormDataStore);
}
