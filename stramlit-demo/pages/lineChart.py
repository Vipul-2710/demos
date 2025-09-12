import streamlit as st

import pandas as pd

import numpy as np

st.title("Student Performance Over Time")

# Sample data: Weekly test scores for 3 students

data = {
    "Week 1": [75, 82, 68],
    "Week 2": [80, 85, 70],
    "Week 3": [78, 88, 74],
    "Week 4": [85, 90, 78],
}


# Create DataFrame with student names as rows 

df = pd.DataFrame(data, index=["Student A", "Student B", "Student C"]) 


# Transpose to make weeks on x-axis 

df = df.T  

st.line_chart(df) 
