import streamlit as st 

st.title("Subject Enrollment") 

subjects = st.multiselect("Select your subjects", ["Math", "Physics", "Economics", "History"]) 

st.write("You have enrolled in:", subjects) 
