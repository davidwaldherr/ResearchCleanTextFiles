# this file imports the content.txt file as a list
# if it ends with two spaces, remove the last two characters
# if it ends with a space, remove the last character

with open('text.txt', 'r') as f:
    content = f.read().splitlines()

# strip each line in content
for i in range(len(content)):
    # after every period, add a space
    content[i] = content[i].replace('.', '. ')
    content[i] = " ".join(content[i].split())
    # Strip the line
    content[i] = content[i].strip()
    # if the line does not end with a period, delete every character after the last period
    if not content[i].endswith('.'):
        content[i] = content[i][:content[i].rfind('.') + 1]
    

with open('contentClean.txt', 'w') as f:
    for i in content:
        f.write(i + '\n')
