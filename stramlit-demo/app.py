import streamlit as st

st.title("Hello, Streamlit!")
st.write("Welcome to your first Streamlit app.")
st.set_page_config(page_title="My Streamlit App", layout="wide", page_icon=":white_check_mark:")

st.metric("Tempreture", "30 °c", "+1.4 °c")