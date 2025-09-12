import streamlit as st
import pandas as pd
st.title("Student Forms")

name = st.text_input("Enter your name")
age = st.number_input("Enter your age", step=1, min_value=0)
gender = st.selectbox("Select your gender", ["Male", "Female"])
subjects = st.multiselect("Select your subjects", ["Math", "Physics", "Economics", "History"]) 
submitted = st.button("Submit")

# Use session state to persist the array across reruns
if 'forms_array' not in st.session_state:
    st.session_state['forms_array'] = []

if submitted:
    st.session_state['forms_array'].append({"name": name, "age": age, "gender": gender, "subjects": subjects})
    

if st.session_state['forms_array']:
    st.table(st.session_state['forms_array'])
    df = pd.DataFrame(st.session_state['forms_array'])
    st.write(df)