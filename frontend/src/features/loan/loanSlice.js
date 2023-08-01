import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  data: {
    persondetails: [],
    loandetails: "",
    assetdetail: {
      propertyDetails:[],
      carDetails:[],
      providentfund:"",
      cashInHand:""
    },
    documents:{},
    document: [],
    reference: {},
  },
};
const loanSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    addPerson: (state, action) => {
      state.data.persondetails.push(action.payload);
    },
    addReference: (state, action) => {
      state.data.reference = action.payload;
    },
    addLoanDetailindvidual: (state, action) => {
      state.data.loandetails = action.payload;
    },
    addPropertyindvidual: (state, action) => {
      state.data.assetdetail.propertyDetails.push(action.payload)
    },
    addcarindvidual: (state, action) => {
      state.data.assetdetail.carDetails.push(action.payload)
    },
    addasset: (state, action) => {
      state.data.assetdetail.providentfund = action.payload.profitentfund
      state.data.assetdetail.cashInHand = action.payload.cashinhand
    },
    addDocument: (state,action)=>{
      console.log(action.payload)
      state.data.documents =action.payload
    }
  },
});
export const { addPerson, addReference, addLoanDetailindvidual, addPropertyindvidual,addcarindvidual,addasset,addDocument } =
  loanSlice.actions;

export default loanSlice.reducer;
