import streamlit as st
import pandas as pd
import matplotlib.pyplot as plt

# Sample data
data = {'Subject': ['Math', 'English', 'Science'], 'Marks': [80, 70, 90]}
df = pd.DataFrame(data)

col1, col2 = st.columns([2, 1])

with col2:
    selected_subjects = st.multiselect("Choose Subjects", options=df['Subject'])

with col1:
    st.subheader("Performance Chart")
    fig, ax = plt.subplots()
    if selected_subjects:
        filtered_df = df[df['Subject'].isin(selected_subjects)]
        ax.bar(filtered_df['Subject'], filtered_df['Marks'], color='blue')
    else:
        ax.bar(df['Subject'], df['Marks'], color='green')
    ax.set_ylabel('Marks')
    ax.set_xlabel('Subject')
    ax.set_title('Student Performance')
    st.pyplot(fig)
    st.subheader("Filters") 
