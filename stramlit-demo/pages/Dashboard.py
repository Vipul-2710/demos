import streamlit as st
import pandas as pd

st.title("Dashboard Example")
st.write("This is a simple dashboard about student marks.")

# Let's create a sample dataframe
data = {
    'Student': ['Alice', 'Bob', 'Charlie', 'David', 'Eva'],
    'Math': [85, 90, 78, 29, 38],
    'Science': [89, 25  , 80, 15, 87],
    'English': [20  , 88, 79, 85, 10]
}
df = pd.DataFrame(data)

st.subheader("Student Marks Data")
st.dataframe(df)

# Disaply line chart
st.subheader("Marks Line Chart")
st.line_chart(df.set_index('Student'))

# display bar chart
st.subheader("Marks Bar Chart")
st.bar_chart(df.set_index('Student'))