import streamlit as st
import google.generativeai as genai


st.title("Welcome to the GenAI Example App")
user_input = st.text_input("Ask anything about GenAI:")


genai.configure(api_key="AIzaSyDns_DZ1H70wLydCNiapvsWO6BLCQggsQ0")


model = genai.GenerativeModel("models/gemini-1.5-flash-latest")


if user_input:
    response = model.generate_content(user_input)
    st.write("Response from GenAI:")
    st.write(response.text)