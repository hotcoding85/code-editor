
#!/bin/bash
# Git settings
echo "export GIT_COMMIT_MSG=$(git log --format=format:\"%s\" -n 1 ${CIRCLE_SHA1})" >> $BASH_ENV

# Global environments
echo "export COLOR_FAILURE='#ffccc7'" >> $BASH_ENV
echo "export COLOR_SUCCESS='#b7eb8f'" >> $BASH_ENV

echo "export GITHUB_WEBBER=webberwang" >> $BASH_ENV
echo "export GITHUB_JETHRO=jethrocabaluna" >> $BASH_ENV
echo "export GITHUB_VLADSLAV=vladyslav-polishchuk" >> $BASH_ENV
echo "export GITHUB_ASSIM=assimhabeek" >> $BASH_ENV
echo "export GITHUB_YASEEN=mohasarc" >> $BASH_ENV
echo "export GITHUB_ELHAM=melhamin" >> $BASH_ENV
echo "export GITHUB_AMR=amrmuhamedd" >> $BASH_ENV
echo "export GITHUB_VOLODYMYR=volodymyryankovskyi" >> $BASH_ENV

echo "export SLACK_WEBBER=U0J401GAH" >> $BASH_ENV
echo "export SLACK_JETHRO=U04HTG79Q8Z" >> $BASH_ENV
echo "export SLACK_U049ASJ65PH=U0J401GAH" >> $BASH_ENV
echo "export SLACK_ASSIM=U02GJN72TKR" >> $BASH_ENV
echo "export SLACK_YASEEN=U03B5N7J2N9" >> $BASH_ENV
echo "export SLACK_ELHAM=U0406P3J9T6" >> $BASH_ENV
echo "export SLACK_AMR=U05450CDUGJ" >> $BASH_ENV
echo "export SLACK_VOLODYMYR=U0J401GAH" >> $BASH_ENV

echo "export SLACK_CHANNEL_UPDATE=CQVPNKS8K" >> $BASH_ENV

echo "export NEO4J_PASSWORD=password" >> $BASH_ENV
echo "export NEO4J_URI=bolt://127.0.0.1:7687" >> $BASH_ENV
echo "export NEO4J_USER=neo4j" >> $BASH_ENV
echo "export NODE_OPTIONS='--max_old_space_size=8192'" >> $BASH_ENV

# Slack settings
if [ "$CIRCLE_USERNAME" == "$GITHUB_JETHRO" ]; then
  echo "export SLACK_PARAM_MENTIONS=\<@${SLACK_JETHRO}\>" >> $BASH_ENV
elif [ "$CIRCLE_USERNAME" == "$GITHUB_VLADSLAV" ]; then
  echo "export SLACK_PARAM_MENTIONS=\<@${SLACK_VLADSLAV}\>" >> $BASH_ENV
elif [ "$CIRCLE_USERNAME" == "$GITHUB_ASSIM" ]; then
  echo "export SLACK_PARAM_MENTIONS=\<@${SLACK_ASSIM}\>" >> $BASH_ENV
elif [ "$CIRCLE_USERNAME" == "$GITHUB_YASEEN" ]; then
  echo "export SLACK_PARAM_MENTIONS=\<@${SLACK_YASEEN}\>" >> $BASH_ENV
elif [ "$CIRCLE_USERNAME" == "$GITHUB_ELHAM" ]; then
  echo "export SLACK_PARAM_MENTIONS=\<@${SLACK_ELHAM}\>" >> $BASH_ENV
elif [ "$CIRCLE_USERNAME" == "$GITHUB_AMR" ]; then
  echo "export SLACK_PARAM_MENTIONS=\<@${SLACK_AMR}\>" >> $BASH_ENV
elif [ "$CIRCLE_USERNAME" == "$GITHUB_VOLODYMYR" ]; then
  echo "export SLACK_PARAM_MENTIONS=\<@${SLACK_VOLODYMYR}\>" >> $BASH_ENV
else
  echo "export SLACK_PARAM_MENTIONS=\<@${SLACK_WEBBER}\>" >> $BASH_ENV
fi

source $BASH_ENV

