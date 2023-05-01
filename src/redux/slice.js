import {createSlice} from '@reduxjs/toolkit';
const slice=createSlice({
    name:'Cart',
    initialState:{prod:[],total:0,discount:0,subtotal:0,gst:0},
    reducers:{
        add:(state,action)=>{
            state.prod.push(action.payload);
        },
        increment:(state,action)=>{
            const item=action.payload;
            state.prod.forEach((i)=>{
                if(i.id==item)
                i.qty+=1;
            });
        },
        decrement:(state,action)=>{
            const item=action.payload;
            state.prod.forEach((i)=>{
                if(i.id==item)
                {
                    if(i.qty>1)
                    i.qty-=1;
                }
            });
        },
        remove:(state,action)=>{
            state.prod=state.prod.filter((i)=>i.id!=action.payload);
        },
        amount:(state)=>{
            let suma=0;
            let sumb=0;
            state.prod.forEach((i)=>{
                if(i.cat==="arr")
                suma+=i.qty*i.price;
                else
                sumb+=i.qty*i.price;
                });
                state.subtotal=suma+sumb;
                state.discount=+((suma*40)/100).toFixed(2);
                state.gst=+(((state.subtotal-state.discount)*18)/100).toFixed(2);
                state.total=+(state.subtotal-state.discount+state.gst).toFixed(2);
        }
    }
});

export const {add,increment,decrement,remove,amount}=slice.actions;

export default slice.reducer;