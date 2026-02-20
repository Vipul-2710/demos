# pip install streamlit
# pip install -U google-genai
# api key from ai studio

import streamlit as st
from google import genai

st.title("Chat bot demo by Gemini")

user_input = st.text_input("Enter your questions:")

if st.button("Submit"):
    if user_input.strip():
        try:
            client = genai.Client(api_key="AIzaSyBhRSD3yVPS7kTIJl_kAse_ELqLKkuwarA")
            response = client.models.generate_content(
                model="gemini-3-flash-preview",  # Assuming correct model name
                contents=user_input
            )
            st.session_state.response = response.text
        except Exception as e:
            st.error(f"An error occurred: {str(e)}")
    else:
        st.warning("Please enter a question.")

st.text(f"You: {user_input}")
if st.session_state.response:
    st.text(f"Gemini: {st.session_state.response}")
